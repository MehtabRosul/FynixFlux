
import { HeaderBar } from '@/components/insight-hub/header-bar';
import { LeftColumn } from '@/components/insight-hub/left-column';
import { RightColumn } from '@/components/insight-hub/right-column';
import { FooterStrip } from '@/components/insight-hub/footer-strip';


export default function InsightHubPage() {
  return (
    <div className="h-screen w-screen bg-[#0b0c0f] text-[#E6EEF8] font-body flex flex-col p-6 gap-5 overflow-hidden">
        <div className="grid grid-cols-12 grid-rows-8 gap-5 flex-grow h-full">
            {/* Header Bar */}
            <div className="col-span-12 row-span-1">
                <HeaderBar />
            </div>

            {/* Left Column */}
            <div className="col-span-7 row-span-5 row-start-2">
                 <LeftColumn />
            </div>

            {/* Right Column */}
            <div className="col-span-5 row-span-5 row-start-2">
                 <RightColumn />
            </div>

            {/* Footer Strip */}
            <div className="col-span-12 row-span-2 row-start-7">
                <FooterStrip />
            </div>
        </div>
    </div>
  );
}
