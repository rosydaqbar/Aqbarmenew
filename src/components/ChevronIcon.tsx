import svgPaths from "../assets/icons/chevronPaths";

const keys = [
  "p3cf75a80","p27e82900","p2d95e580","p2e412100","pd3e900","p2671fd80","pc703c00","p379aed80",
  "pf435c80","p27a09800","p1dd44e00","p158c3800","p234b2c00","p1d61bf00","p38548300","p87fc500",
  "p3cd10200","p14885080","p308ddc80","p2235a080","p38a74180","p1b088200","p2aeaf32","p1a5f2380",
  "p1eab7d00","p3f00f000","pba11680","p35b99ca0","p2984bb00","p67cd40","p22032700","p37e37700",
  "p12d48500","p1f6ef900","p18599400","p13281c80",
] as const;

export function ChevronIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      {keys.map((k) => (
        <path key={k} d={(svgPaths as Record<string, string>)[k]} fill="white" />
      ))}
    </svg>
  );
}
