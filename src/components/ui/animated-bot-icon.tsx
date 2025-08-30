
import { cn } from "@/lib/utils";

export const AnimatedBotIcon = ({ className }: { className?: string }) => {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-eye {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(className)}
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
        <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse-eye" style={{ animationDelay: '0.5s' }} />
      </svg>
    </>
  );
};
