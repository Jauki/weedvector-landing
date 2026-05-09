import imgScreenshot20260224At1847071 from "./fc65b9048996777fda73fb3020c4f97b542a8f50.png";

function Logo() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
        <g clipPath="url(#clip0_1_55)" id="Logo">
          <g id="Vector" />
          <path d="M78 48L48 78" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
          <path d="M72 15L15 72" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
        </g>
        <defs>
          <clipPath id="clip0_1_55">
            <rect fill="white" height="96" width="96" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Al() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="AL">
      <Logo />
    </div>
  );
}

function Al1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#0a0a0a] w-full" data-name="AL">
      <p className="font-['Geist_Mono:Semibold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] tracking-[-1.5px] w-full">Weedvector UI</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[24px] w-full">Figma component library based on shadcn/ui.</p>
    </div>
  );
}

export default function CustomThumbnail() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-between p-[64px] relative size-full" data-name="Custom Thumbnail">
      <Al />
      <Al1 />
      <div className="h-[180px] relative shrink-0 w-[797px]" data-name="Screenshot 2026-02-24 at 18.47.07 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260224At1847071} />
      </div>
    </div>
  );
}