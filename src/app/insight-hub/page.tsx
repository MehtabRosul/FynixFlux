
import { HeaderBar } from '@/components/insight-hub/header-bar';
import { LeftColumn } from '@/components/insight-hub/left-column';
import { RightColumn } from '@/components/insight-hub/right-column';
import { FooterStrip } from '@/components/insight-hub/footer-strip';


export default function InsightHubPage() {
  return (
    <div className="h-screen w-screen bg-[#0b0c0f] text-[#E6EEF8] font-sans flex flex-col p-6 gap-5 overflow-hidden">
        <div className="grid grid-cols-[1fr_0.58fr] grid-rows-[auto_1fr_auto] gap-5 flex-grow h-full">
            {/* Header Bar */}
            <div className="col-span-2">
                <HeaderBar />
            </div>

            {/* Left Column */}
            <div className="flex flex-col gap-5 overflow-y-auto">
                 <LeftColumn />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-5 overflow-y-auto">
                 <RightColumn />
            </div>

            {/* Footer Strip */}
            <div className="col-span-2">
                <FooterStrip />
            </div>
        </div>
    </div>
  );
}
