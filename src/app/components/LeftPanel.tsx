import { StaggeredLine } from "./StaggeredLine";
import { RotatingServiceText } from "./RotatingServiceText";
import { IcChevron } from "./IcChevron";

const experiences = [
  {
    company: "Quipper",
    role: "Product Designer",
    location: "Remote",
    period: "2022 - 2026",
    bullets: [
      "Led design system implementation across 3 platform",
      "Improved assignment creation and delivery efficiency for teachers by 52.6%, reducing the steps 19 to 9.",
      "Designed a cheating-activity detection and bulk follow-up action for teachers, reducing task completion time by over 85% and making the task 6.7× faster to complete.",
    ],
  },
  {
    company: "Antikode",
    role: "UI/UX Designer",
    location: "Jakarta, Indonesia",
    period: "2018 - 2021",
    bullets: [
      "Led design system for AXISNet reducing overall design delivery and efficiency.",
      "Revamped the AXISNet membership feature (ALifetime), which led to a 40% increase in visits and a 70% increase in bonus items claimed.",
      "Designed Paket Suka-Suka for AXISNet, a customizable internet package feature that achieved 84% user satisfaction based on survey results.",
    ],
  },
  {
    company: "Syntac",
    role: "UI/UX Designer",
    location: "Remote",
    period: "2018 - 2021",
    bullets: ["Led the UI/UX team for new initiatives and guided the design direction."],
  },
];

let s = 0;
const t = () => {
  const v = s;
  s += 0.045;
  return v;
};

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="mailto:raqbars@gmail.com"
      className="inline-flex rounded-lg bg-gradient-to-b from-[rgba(36,36,36,0.5)] to-[rgba(28,22,22,0.25)] px-3 py-1 text-white shadow-[0px_1px_0px_rgba(0,0,0,0.05),0px_4px_2px_rgba(0,0,0,0.05),0px_10px_5px_rgba(0,0,0,0.1)] backdrop-blur transition hover:brightness-125"
      style={{ fontSize: "14px", lineHeight: "20px" }}
    >
      {children}
    </a>
  );
}

function ExperienceRow({ exp }: { exp: (typeof experiences)[number] }) {
  return (
    <div className="flex w-full flex-col gap-3 py-2">
      <div className="flex w-full items-center gap-6">
        <div className="flex min-w-[120px] flex-col gap-1">
          <span className="text-[#e2e2e2]" style={{ fontSize: "16px", lineHeight: 1.618, fontWeight: 700 }}>
            {exp.company}
          </span>
          <div className="flex flex-wrap items-center gap-2 text-[#9c9c9c]">
            <span style={{ fontSize: "14px", lineHeight: 1.618 }}>{exp.role}</span>
            <span style={{ fontSize: "16px", lineHeight: 1.618 }}>•</span>
            <span style={{ fontSize: "14px", lineHeight: 1.618 }}>{exp.location}</span>
            <span
              className="rounded-full bg-gradient-to-b from-[rgba(22,22,22,0.5)] to-[rgba(22,22,22,0.6)] px-3 py-0.5 text-white"
              style={{ fontSize: "14px", lineHeight: 1.618 }}
            >
              {exp.period}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {exp.bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex h-6 items-center py-1">
              <IcChevron size={16} />
            </div>
            <p className="flex-1 text-[#9c9c9c]" style={{ fontSize: "14px", lineHeight: 1.618 }}>
              {b}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LeftPanelTop() {
  s = 0;
  return (
    <div className="flex w-full flex-col bg-[#1b1b1b]">
      <div className="flex flex-col gap-12 pt-4 pb-8">
        <StaggeredLine delay={t()}>
          <div className="flex w-full max-w-[580px] items-center justify-between py-2">
            <div className="flex items-center gap-1 py-1">
              <div className="relative h-6 w-6">
                <div className="absolute left-1 top-[3px] h-[18px] w-[7px] rounded-[2px] bg-white/50 shadow-[0px_1px_0px_rgba(0,0,0,0.05),0px_4px_4px_rgba(0,0,0,0.05),0px_10px_10px_rgba(0,0,0,0.1)] backdrop-blur" />
                <div className="absolute left-[13px] top-[3px] h-[7px] w-[7px] rounded-[2px] bg-white/50 shadow-[0px_1px_0px_rgba(0,0,0,0.05),0px_4px_4px_rgba(0,0,0,0.05),0px_10px_10px_rgba(0,0,0,0.1)] backdrop-blur" />
              </div>
              <span className="text-white" style={{ fontSize: "20px", letterSpacing: "-0.9px", fontWeight: 700 }}>
                Aqbar
              </span>
            </div>
            <PrimaryButton>Get in Touch</PrimaryButton>
          </div>
        </StaggeredLine>

        <div className="flex w-full max-w-[580px] flex-col gap-4 py-2">
          <StaggeredLine delay={t()}>
            <p className="text-[#e2e2e2]" style={{ fontSize: "18px", lineHeight: 1.618, fontWeight: 700 }}>
              Raden Rosyd Aqbar Setiyanto.
            </p>
          </StaggeredLine>
          <StaggeredLine delay={t()}>
            <p className="text-[#9c9c9c]" style={{ fontSize: "18px", lineHeight: 1.618 }}>
              I built <RotatingServiceText /> that people can actually use and AI can interact with.
            </p>
          </StaggeredLine>
          <StaggeredLine delay={t()}>
            <p className="text-[#9c9c9c]" style={{ fontSize: "18px", lineHeight: 1.618 }}>
              Currently self-employed, previously at Quipper and Antikode.
            </p>
          </StaggeredLine>
          <StaggeredLine delay={t()}>
            <div className="inline-flex items-center gap-2 self-start rounded-[10px] bg-gradient-to-b from-[rgba(22,22,22,0.5)] to-[rgba(22,22,22,0.6)] px-3 py-1">
              <span className="relative inline-block h-1 w-1">
                <span className="absolute inset-0 rounded-full bg-[#09991F]" />
                <span className="absolute -inset-1 animate-ping rounded-full bg-[#09991F]/50" />
              </span>
              <span className="text-white" style={{ fontSize: "14px", lineHeight: 1.618 }}>
                Available for new opportunities
              </span>
            </div>
          </StaggeredLine>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-4 pb-10">
        <div className="flex flex-col gap-3 py-2">
          <StaggeredLine delay={t()}>
            <p className="text-[#e2e2e2]" style={{ fontSize: "18px", lineHeight: 1.618, fontWeight: 700 }}>
              Experience.
            </p>
          </StaggeredLine>
          <StaggeredLine delay={t()}>
            <p className="text-[#9c9c9c]" style={{ fontSize: "16px", lineHeight: 1.618 }}>
              Journey through different companies, roles, and the impact I've made along the way.
            </p>
          </StaggeredLine>
        </div>
        <div className="flex flex-col gap-4">
          {experiences.map((e) => (
            <StaggeredLine key={e.company} delay={t()}>
              <ExperienceRow exp={e} />
            </StaggeredLine>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LeftPanelBottom() {
  return (
    <div className="flex w-full flex-col bg-[#1b1b1b]">
      <div className="flex flex-col items-start gap-3 pt-8">
        <p className="text-[#9c9c9c]" style={{ fontSize: "14px", lineHeight: 1.618 }}>
          Want to see more?
        </p>
        <a
          href="https://figma.com/design/JB75Gv6OcjDvlcleJ7bX9X/Aqbar-s-Work--Full-?node-id=2001-2&t=VW0tXu4rAhuLOFZ3-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-lg bg-gradient-to-b from-[rgba(36,36,36,0.5)] to-[rgba(28,22,22,0.25)] px-3 py-1 text-white shadow-[0px_1px_0px_rgba(0,0,0,0.05),0px_4px_2px_rgba(0,0,0,0.05),0px_10px_5px_rgba(0,0,0,0.1)] backdrop-blur transition hover:brightness-125"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          View my works
        </a>
      </div>
      <div className="py-2 pt-8">
        <div className="rounded-lg bg-gradient-to-b from-[rgba(22,22,22,0.5)] to-[rgba(22,22,22,0.6)] px-8 py-6">
          <div className="flex flex-col gap-2">
            <p className="text-white" style={{ fontSize: "16px", lineHeight: 1.618 }}>
              Say Hello.
            </p>
            <p className="text-[#9c9c9c]" style={{ fontSize: "16px", lineHeight: 1.618 }}>
              Ready to work together? Let's make an impact.
            </p>
            <div className="mt-1">
              <PrimaryButton>Get in Touch</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <p className="text-[#9c9c9c]" style={{ fontSize: "12px", lineHeight: 1.618 }}>
          © 2025 Rosyd Aqbar
        </p>
      </div>
    </div>
  );
}

export function LeftPanel() {
  return (
    <div
      className="flex w-[620px] flex-col bg-[#1b1b1b] pr-6"
      style={{ borderRight: "3px solid #000" }}
    >
      <LeftPanelTop />
      <LeftPanelBottom />
    </div>
  );
}
