import svgPaths from "./svg-9iiic1ty5m";
import imgImage6 from "./1eeaebd0071197cfd7094eebd51708b06f78e269.png";
import imgImage43 from "./5fff5e22a5d1300de1cd797be0707435ef60f22e.png";

function Group() {
  return (
    <div className="absolute h-[309.327px] left-[264px] top-[-46px] w-[539.378px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 539.378 309.327">
        <g id="Group 427318674">
          <path clipRule="evenodd" d={svgPaths.pd082b00} fill="var(--fill-0, #C4E648)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p366a55c0} fill="var(--fill-0, #C4E648)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Bitwyre() {
  return (
    <div className="bg-[#09090b] relative size-full" data-name="bitwyre-3">
      <Group />
      <div className="-translate-x-1/2 absolute h-[309px] left-[calc(50%-153px)] pointer-events-none rounded-[8px] top-[77px] w-[378px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage6} />
        <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-[-4px] rounded-[12px]" />
      </div>
      <div className="absolute h-[340px] left-[444px] pointer-events-none rounded-[4px] top-[77px] w-[285px]" data-name="image 43">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full" src={imgImage43} />
        <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-[-4px] rounded-[8px]" />
      </div>
    </div>
  );
}