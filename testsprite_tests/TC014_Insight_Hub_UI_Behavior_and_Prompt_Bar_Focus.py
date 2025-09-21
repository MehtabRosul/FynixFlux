import asyncio
from playwright import async_api

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:9002", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # Click on 'Go to Dashboard' to open the Dashboard page.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/section/div[2]/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click the 'Open Insight Hub' button to open the Insight Hub panel in-place.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/div/div[4]/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Scroll down within the Insight Hub panel to observe top control row behavior.
        await page.mouse.wheel(0, 200)
        

        # Scroll back up to verify the top control row reappears smoothly on scroll up.
        await page.mouse.wheel(0, -200)
        

        # Assert that the page did not navigate or reload by checking the URL remains the same after opening Insight Hub
        initial_url = page.url
        await page.wait_for_timeout(1000)  # wait a moment to ensure no navigation
        assert page.url == initial_url, 'Page navigated or reloaded after opening Insight Hub panel'
          
        # Assert that the prompt input bar is auto-focused for immediate text entry
        prompt_input = frame.locator('input[placeholder="Type your prompt here"]')
        focused_element = await page.evaluate('document.activeElement')
        assert await prompt_input.evaluate('(el) => el === document.activeElement'), 'Prompt input bar is not auto-focused'
          
        # Scroll within the Insight Hub panel to trigger top control row hiding
        await page.mouse.wheel(0, 200)
        await page.wait_for_timeout(500)  # wait for animation to complete
          
        # Check that the top control row hides with smooth animation while scrolling down
        top_controls = frame.locator('div.top-control-row')
        top_controls_box = await top_controls.bounding_box()
        assert top_controls_box is not None, 'Top control row not found'
        assert top_controls_box['height'] < 10, 'Top control row did not hide smoothly on scroll down'
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    