import svgPaths from "./svg-vgkjcyeitw";
import imgImage31 from "./ddfcb7e94b53ba06761be323aff6d443daa4eb64.png";
import imgImage32 from "./f94e06675dddc9e0c1cd2bb644337d4a792cf1e5.png";
import imgImage33 from "./2ab685e5f53589b0a6667f46241826ccbc444144.png";
import imgImage34 from "./1bbfcad798590660313cb8799f7918ba33f919b6.png";

function RLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="R Logo">
      <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.5)] h-[18px] left-[4px] rounded-[2px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_10px_10px_0px_rgba(0,0,0,0.1)] top-[3px] w-[7px]" data-name="Logo Icon" />
      <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.5)] left-[13px] rounded-[2px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_10px_10px_0px_rgba(0,0,0,0.1)] size-[7px] top-[3px]" data-name="Logo Icon" />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[4px] relative shrink-0" data-name="Logo">
      <RLogo />
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.9px] whitespace-nowrap">Aqbar</p>
    </div>
  );
}

function Left() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex items-center justify-between max-w-[580px] py-[8px] relative shrink-0 w-full" data-name="Left">
      <Logo />
      <div className="backdrop-blur-[10px] bg-gradient-to-b content-stretch drop-shadow-[0px_1px_0px_rgba(0,0,0,0.05),0px_4px_2px_rgba(0,0,0,0.05),0px_10px_5px_rgba(0,0,0,0.1)] flex from-[71.635%] from-[rgba(36,36,36,0.5)] gap-[8px] items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0 to-[rgba(28,22,22,0.25)]" data-name="Button Primary">
        <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[20px]">Get in Touch</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Header Text Container">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[1.618] relative shrink-0 text-[#e2e2e2] text-[16px] whitespace-nowrap">Raden Rosyd Aqbar Setiyanto.</p>
      <div className="font-['Geist:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#9c9c9c] text-[0px] w-[min-content]">
        <p className="font-['Space_Mono:Regular',sans-serif] mb-0 text-[16px]">
          <span className="leading-[1.618]">{`I built `}</span>
          <span className="leading-[1.618] text-white">{`B2B service `}</span>
          <span className="leading-[1.618] text-[#9c9c9c]">that people can actually use and AI can interact with.</span>
        </p>
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] text-[16px]">Currently working at Quipper and previously at Antikode.</p>
      </div>
    </div>
  );
}

function AvailabilityContainer() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(22,22,22,0.5)] gap-[8px] items-center px-[12px] py-[4px] relative rounded-[10px] shrink-0 to-[rgba(22,22,22,0.6)]" data-name="Availability Container">
      <div className="relative shrink-0 size-[4px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #09991F)" id="Ellipse" r="1.5" stroke="var(--stroke-0, #09991F)" />
        </svg>
      </div>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Available for new opportunities</p>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px py-[8px] relative" data-name="Header Container">
      <div aria-hidden="true" className="absolute border border-[#1b1b1b] border-solid inset-[-1px] pointer-events-none" />
      <HeaderTextContainer />
      <AvailabilityContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start max-w-[580px] relative shrink-0 w-full" data-name="Header">
      <HeaderContainer />
    </div>
  );
}

function HeroSectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start pb-[32px] pt-[16px] relative shrink-0 w-full" data-name="Hero Section Container">
      <Left />
      <Header />
    </div>
  );
}

function ExperienceHeaderTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.618] not-italic relative shrink-0 w-full" data-name="Experience Header Text Container">
      <p className="font-['Space_Mono:Bold',sans-serif] relative shrink-0 text-[#e2e2e2] text-[16px] whitespace-nowrap">Experience.</p>
      <p className="font-['Space_Mono:Regular',sans-serif] min-w-full relative shrink-0 text-[#9c9c9c] text-[14px] w-[min-content]">{`Journey through different companies, roles, and the impact I've made along the way.`}</p>
    </div>
  );
}

function ExperienceHeaderContainer() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[8px] relative" data-name="Experience Header Container">
      <ExperienceHeaderTextContainer />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start max-w-[580px] relative shrink-0 w-full" data-name="Header">
      <ExperienceHeaderContainer />
    </div>
  );
}

function ExperienceLocationContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Experience Location Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[10px] whitespace-nowrap">Remote</p>
    </div>
  );
}

function ExperienceDateContainer() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(22,22,22,0.5)] items-center px-[12px] py-[2px] relative rounded-[50px] shrink-0 to-[rgba(22,22,22,0.6)]" data-name="Experience Date Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">2022 - Now</p>
    </div>
  );
}

function ExperienceMetaContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Experience Meta Container">
      <ExperienceLocationContainer />
      <ExperienceDateContainer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[10px] whitespace-nowrap">Product Designer</p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[14px] whitespace-nowrap">•</p>
      <ExperienceMetaContainer />
    </div>
  );
}

function ExperienceCompanyContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[120px] relative shrink-0" data-name="Experience Company Container">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#e2e2e2] text-[14px] whitespace-nowrap">Quipper</p>
      <Frame />
    </div>
  );
}

function ExperienceDetails() {
  return <div className="h-px shrink-0 w-full" data-name="Experience Details" />;
}

function ExperienceDetailsContainer() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Experience Details Container">
      <div className="content-stretch flex flex-col items-start py-[21px] relative size-full">
        <ExperienceDetails />
      </div>
    </div>
  );
}

function ExperienceItem() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Experience Item">
      <ExperienceCompanyContainer />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ExperienceDetailsContainer />
      </div>
    </div>
  );
}

function IcChevron() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ic_chevron">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ic_chevron">
          <g id="Vector">
            <path d={svgPaths.p3cf75a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27e82900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d95e580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e412100} fill="var(--fill-0, white)" />
            <path d={svgPaths.pd3e900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2671fd80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc703c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p379aed80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf435c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27a09800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1dd44e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p158c3800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p234b2c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d61bf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38548300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p87fc500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3cd10200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14885080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p308ddc80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2235a080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38a74180} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b088200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2aeaf32} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a5f2380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1eab7d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f00f000} fill="var(--fill-0, white)" />
            <path d={svgPaths.pba11680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p35b99ca0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2984bb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p67cd40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22032700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37e37700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12d48500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1f6ef900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18599400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p13281c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[24px] items-center overflow-clip py-[4px] relative shrink-0">
      <IcChevron />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame3 />
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[12px] whitespace-nowrap">Led design system implementation across 3 platform</p>
    </div>
  );
}

function IcChevron1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ic_chevron">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ic_chevron">
          <g id="Vector">
            <path d={svgPaths.p3cf75a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27e82900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d95e580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e412100} fill="var(--fill-0, white)" />
            <path d={svgPaths.pd3e900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2671fd80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc703c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p379aed80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf435c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27a09800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1dd44e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p158c3800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p234b2c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d61bf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38548300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p87fc500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3cd10200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14885080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p308ddc80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2235a080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38a74180} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b088200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2aeaf32} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a5f2380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1eab7d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f00f000} fill="var(--fill-0, white)" />
            <path d={svgPaths.pba11680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p35b99ca0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2984bb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p67cd40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22032700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37e37700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12d48500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1f6ef900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18599400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p13281c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[24px] items-center overflow-clip py-[4px] relative shrink-0">
      <IcChevron1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame7 />
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[1.618] min-w-px not-italic relative text-[#9c9c9c] text-[12px]">Improved assignment creation and delivery efficiency for teachers by 52.6%, reducing the steps 19 to 9.</p>
    </div>
  );
}

function IcChevron2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ic_chevron">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ic_chevron">
          <g id="Vector">
            <path d={svgPaths.p3cf75a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27e82900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d95e580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e412100} fill="var(--fill-0, white)" />
            <path d={svgPaths.pd3e900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2671fd80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc703c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p379aed80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf435c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27a09800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1dd44e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p158c3800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p234b2c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d61bf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38548300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p87fc500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3cd10200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14885080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p308ddc80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2235a080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38a74180} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b088200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2aeaf32} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a5f2380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1eab7d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f00f000} fill="var(--fill-0, white)" />
            <path d={svgPaths.pba11680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p35b99ca0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2984bb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p67cd40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22032700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37e37700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12d48500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1f6ef900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18599400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p13281c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[24px] items-center overflow-clip py-[4px] relative shrink-0">
      <IcChevron2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame9 />
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] leading-[1.618] min-w-px not-italic relative text-[#9c9c9c] text-[12px]">Designed a cheating-activity detection and bulk follow-up action for teachers, reducing task completion time by over 85% and making the task 6.7× faster to complete.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
      <Frame8 />
    </div>
  );
}

function ExperienceList() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex flex-col gap-[12px] items-start py-[8px] relative shrink-0 w-full" data-name="Experience List">
      <ExperienceItem />
      <Frame6 />
    </div>
  );
}

function ExperienceLocationContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Experience Location Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[10px] whitespace-nowrap">Jakarta, Indonesia</p>
    </div>
  );
}

function ExperienceDateContainer1() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(22,22,22,0.5)] items-center px-[12px] py-[4px] relative rounded-[50px] shrink-0 to-[rgba(22,22,22,0.6)]" data-name="Experience Date Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">2018 - 2021</p>
    </div>
  );
}

function ExperienceMetaContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Experience Meta Container">
      <ExperienceLocationContainer1 />
      <ExperienceDateContainer1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[10px] whitespace-nowrap">UI/UX Designer</p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[14px] whitespace-nowrap">•</p>
      <ExperienceMetaContainer1 />
    </div>
  );
}

function ExperienceCompanyContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[120px] relative shrink-0" data-name="Experience Company Container">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#e2e2e2] text-[14px] whitespace-nowrap">Antikode</p>
      <Frame2 />
    </div>
  );
}

function ExperienceDetailsContainer1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Experience Details Container">
      <div className="content-stretch flex flex-col items-start py-[21px] size-full" />
    </div>
  );
}

function ExperienceCompanyContainer1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Experience Company Container">
      <ExperienceCompanyContainer2 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ExperienceDetailsContainer1 />
      </div>
    </div>
  );
}

function ExperienceItem1() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex flex-col gap-[12px] items-start py-[8px] relative shrink-0 w-full" data-name="Experience Item">
      <ExperienceCompanyContainer1 />
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[12px] w-full">Led design system for AXISNet reducing overall design delivery and efficiency.</p>
    </div>
  );
}

function ExperienceLocationContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Experience Location Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[10px] whitespace-nowrap">Remote</p>
    </div>
  );
}

function ExperienceDateContainer2() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(22,22,22,0.5)] items-center px-[12px] py-[4px] relative rounded-[50px] shrink-0 to-[rgba(22,22,22,0.6)]" data-name="Experience Date Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">2018 - 2021</p>
    </div>
  );
}

function ExperienceMetaContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Experience Meta Container">
      <ExperienceLocationContainer2 />
      <ExperienceDateContainer2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[10px] whitespace-nowrap">UI/UX Designer</p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[14px] whitespace-nowrap">•</p>
      <ExperienceMetaContainer2 />
    </div>
  );
}

function ExperienceCompanyContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[120px] relative shrink-0" data-name="Experience Company Container">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#e2e2e2] text-[14px] whitespace-nowrap">Syntac</p>
      <Frame10 />
    </div>
  );
}

function ExperienceDetailsContainer2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Experience Details Container">
      <div className="content-stretch flex flex-col items-start py-[21px] size-full" />
    </div>
  );
}

function ExperienceCompanyContainer3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Experience Company Container">
      <ExperienceCompanyContainer4 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ExperienceDetailsContainer2 />
      </div>
    </div>
  );
}

function ExperienceItem2() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex flex-col gap-[12px] items-start py-[8px] relative shrink-0 w-full" data-name="Experience Item">
      <ExperienceCompanyContainer3 />
      <p className="font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] leading-[1.618] relative shrink-0 text-[#9c9c9c] text-[12px] w-[425.687px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Led the UI/UX team for new initiatives and guided the design direction. `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <ExperienceList />
      <ExperienceItem1 />
      <ExperienceItem2 />
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Experience Content">
      <Header1 />
      <Frame1 />
    </div>
  );
}

function ExperienceContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[16px] relative shrink-0 w-full" data-name="Experience Container">
      <ExperienceContent />
    </div>
  );
}

function ContactHeaderTextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Contact Header Text Container">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[14px] text-white w-[360px]">Say Hello.</p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] min-w-full not-italic relative shrink-0 text-[#9c9c9c] text-[14px] w-[min-content]">Ready to work together? Let’s make an impact.</p>
      <div className="backdrop-blur-[10px] bg-gradient-to-b content-stretch drop-shadow-[0px_1px_0px_rgba(0,0,0,0.05),0px_4px_2px_rgba(0,0,0,0.05),0px_10px_5px_rgba(0,0,0,0.1)] flex from-[71.635%] from-[rgba(36,36,36,0.5)] gap-[8px] items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0 to-[rgba(28,22,22,0.25)]" data-name="Button Primary">
        <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[1.618]">Get in Touch</p>
        </div>
      </div>
    </div>
  );
}

function ContactHeaderContainer() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[rgba(22,22,22,0.5)] min-w-px relative rounded-[8px] to-[rgba(22,22,22,0.6)]" data-name="Contact Header Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[24px] relative size-full">
          <ContactHeaderTextContainer />
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex items-start max-w-[580px] py-[8px] relative shrink-0 w-full" data-name="Header">
      <ContactHeaderContainer />
    </div>
  );
}

function ContactContent() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Contact Content">
      <Header2 />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Footer Content">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#9c9c9c] text-[10px] whitespace-nowrap">© 2025 Rosyd Aqbar</p>
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Footer Container">
      <FooterContent />
    </div>
  );
}

function ContactContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Container">
      <ContactContent />
      <FooterContainer />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[492px]" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-black border-r-3 border-solid inset-[0_-3px_0_0] pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <HeroSectionContainer />
      <ExperienceContainer />
      <ContactContainer />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[1.618] not-italic relative shrink-0 text-[#e2e2e2] text-[16px] whitespace-nowrap">Gallery</p>
      <div className="backdrop-blur-[10px] bg-gradient-to-b content-stretch drop-shadow-[0px_1px_0px_rgba(0,0,0,0.05),0px_4px_2px_rgba(0,0,0,0.05),0px_10px_5px_rgba(0,0,0,0.1)] flex from-[71.635%] from-[rgba(36,36,36,0.5)] gap-[8px] items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0 to-[rgba(28,22,22,0.25)]" data-name="Button Primary">
        <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[20px]">Hide</p>
        </div>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex h-[51px] items-center justify-between max-w-[580px] py-[8px] relative shrink-0 w-full" data-name="Left">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start leading-[1.618] not-italic relative shrink-0 w-[468px]">
      <p className="font-['Space_Mono:Bold',sans-serif] relative shrink-0 text-[#e2e2e2] text-[14px] w-full">Bitwyre</p>
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] min-h-px relative text-[#9c9c9c] text-[10px] w-full">Landing Page, Market Monitor, and Leaderboard.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#181818] content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="h-[368.5px] relative shrink-0 w-[722px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
      <Frame12 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start leading-[1.618] not-italic relative shrink-0 w-[468px]">
      <p className="font-['Space_Mono:Bold',sans-serif] relative shrink-0 text-[#e2e2e2] text-[14px] w-full">Dominus</p>
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] min-h-px relative text-[#9c9c9c] text-[10px] w-full">High conversion and interactive landing page</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#181818] content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="h-[368.5px] relative shrink-0 w-[722px]" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
      <Frame16 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start leading-[1.618] relative shrink-0 w-[468px]">
      <p className="font-['Space_Mono:Bold',sans-serif] not-italic relative shrink-0 text-[#e2e2e2] text-[14px] w-full">InnovateTech</p>
      <p className="flex-[1_0_0] font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] min-h-px relative text-[#9c9c9c] text-[10px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Pitch landing page design for an all-in-one task management SaaS concept. `}</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#181818] content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="h-[368.5px] relative shrink-0 w-[722px]" data-name="image 33">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage33} />
      </div>
      <Frame19 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start leading-[1.618] not-italic relative shrink-0 w-[468px]">
      <p className="font-['Space_Mono:Bold',sans-serif] relative shrink-0 text-[#e2e2e2] text-[14px] w-full">Axis NET</p>
      <p className="flex-[1_0_0] font-['Space_Mono:Regular',sans-serif] min-h-px relative text-[#9c9c9c] text-[10px] w-full">Build your own package feature</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#181818] content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="h-[368.5px] relative shrink-0 w-[722px]" data-name="image 34">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <Frame22 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-bl-[8px] rounded-br-[8px]" data-name="Wrapper">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[16px] relative size-full">
        <Left1 />
        <Frame11 />
        <Frame15 />
        <Frame18 />
        <Frame21 />
      </div>
    </div>
  );
}

export default function Aqbar() {
  return (
    <div className="bg-[#1b1b1b] content-stretch flex gap-[10px] items-start px-[16px] relative size-full" data-name="aqbar">
      <Wrapper />
      <Wrapper1 />
    </div>
  );
}