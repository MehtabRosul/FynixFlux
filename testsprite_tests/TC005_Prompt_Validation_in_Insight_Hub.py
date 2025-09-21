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
        # Click on 'Go to Dashboard' to access main application where Insight Hub panel might be available.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/section/div[2]/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click on 'Open Insight Hub' button to open the Insight Hub panel.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/div/div[4]/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Input a prompt shorter than minimum allowed length into textarea (index 8).
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/div/div/div/div[2]/div/div/textarea').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('abc')
        

        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/div/div/div/div[2]/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Input a prompt containing forbidden patterns into the prompt textarea (index 8) and attempt to submit by clicking 'Start Training' (index 9).
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/div/div/div/div[2]/div/div/textarea').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('forbidden_pattern_example')
        

        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/div/div/div/div[2]/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Input a valid prompt meeting all criteria into the prompt textarea (index 8) and click 'Start Training' (index 9) to confirm acceptance and submission.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/div/div/div/div[2]/div/div/textarea').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('Train a model to predict customer churn using the uploaded dataset.')
        

        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div[2]/main/div/div/div/div[2]/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Assert inline validation error prevents submission for short prompt
        error_locator = frame.locator('xpath=html/body/div[2]/main/div/div/div/div[2]/div/div/span[contains(text(), "minimum length")]')
        assert await error_locator.is_visible(), "Expected validation error for short prompt is not visible."
        # Assert validation message is shown for forbidden pattern prompt
        forbidden_error_locator = frame.locator('xpath=html/body/div[2]/main/div/div/div/div[2]/div/div/span[contains(text(), "forbidden")]')
        assert await forbidden_error_locator.is_visible(), "Expected validation error for forbidden pattern is not visible."
        # Assert submission proceeds for valid prompt by checking that the 'Live Training Metrics' section is visible
        live_metrics_locator = frame.locator('text=Live Training Metrics')
        assert await live_metrics_locator.is_visible(), "Live Training Metrics section is not visible, submission might have failed."
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    