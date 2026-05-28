import { AnimatedReveal } from "./AnimatedReveal";
import { ChevronIcon } from "./ChevronIcon";
import { Link } from "react-router";
import { experiences, socials } from "../data/portfolio";
import { ServiceTypeText } from "./ServiceTypeText";

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
      className="inline-flex rounded-lg border border-site-border bg-site-button px-3 py-1 text-site-primary transition hover:bg-site-button-hover"
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
          <span className="font-title text-site-primary" style={{ fontSize: "16px", lineHeight: 1.618, fontWeight: 700 }}>
            {exp.company}
          </span>
          <div className="flex flex-wrap items-center gap-2 text-site-secondary">
            <span style={{ fontSize: "14px", lineHeight: 1.618 }}>{exp.role}</span>
            <span style={{ fontSize: "16px", lineHeight: 1.618 }}>•</span>
            <span style={{ fontSize: "14px", lineHeight: 1.618 }}>{exp.location}</span>
            <span
              className="rounded-full border border-site-border bg-site-card px-3 py-0.5 text-site-primary"
              style={{ fontSize: "14px", lineHeight: 1.618 }}
            >
              {exp.period}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {exp.bullets.map((b, i) => {
          const isObj = typeof b !== "string";
          const text = isObj ? b.text : b;
          const cta = isObj ? b.cta : undefined;
          return (
            <div key={i} className="flex items-start gap-3">
              <div className="flex h-6 items-center py-1">
                <ChevronIcon size={16} />
              </div>
              <div className="flex flex-1 flex-col items-start gap-2">
                <p className="text-site-secondary" style={{ fontSize: "14px", lineHeight: 1.618 }}>
                  {text}
                  {cta && "disabled" in cta && cta.disabled && (
                    <span className="group relative ml-2 inline-flex align-baseline">
                      <button
                        type="button"
                        disabled
                        className="inline-flex cursor-not-allowed items-center border-b border-dashed border-site-border text-site-muted align-baseline"
                        style={{ fontSize: "14px", lineHeight: "20px" }}
                      >
                        {cta.label}
                      </button>
                      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-site-border bg-site-button px-2 py-1 text-site-primary opacity-0 transition group-hover:opacity-100" style={{ fontSize: "12px", lineHeight: "16px" }}>
                        {cta.tooltip}
                      </span>
                    </span>
                  )}
                  {cta && "href" in cta && cta.href && (
                    <span className="ml-2 inline-flex align-baseline">
                      {cta.href.startsWith("/") ? (
                        <Link
                          to={cta.href}
                          className="inline-flex items-center border-b border-site-border text-site-primary transition hover:border-site-primary"
                          style={{ fontSize: "14px", lineHeight: "20px" }}
                        >
                          {cta.label}
                        </Link>
                      ) : (
                        <a
                          href={cta.href || "#"}
                          target={cta.href ? "_blank" : undefined}
                          rel={cta.href ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center border-b border-site-border text-site-primary transition hover:border-site-primary"
                          style={{ fontSize: "14px", lineHeight: "20px" }}
                        >
                          {cta.label}
                        </a>
                      )}
                    </span>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PortfolioPrimaryContent() {
  s = 0;
  return (
    <div className="flex w-full flex-col bg-site-bg">
      <div className="flex flex-col gap-12 pt-4 pb-8">
        <AnimatedReveal delay={t()}>
          <div className="flex w-full max-w-[580px] items-center justify-between py-2">
            <div className="flex items-center gap-1 py-1">
              <div className="relative h-6 w-6">
                <div className="absolute left-1 top-[3px] h-[18px] w-[7px] rounded-[2px] bg-site-brand-mark" />
                <div className="absolute left-[13px] top-[3px] h-[7px] w-[7px] rounded-[2px] bg-site-brand-mark" />
              </div>
              <span className="font-title text-site-primary" style={{ fontSize: "20px", letterSpacing: "-0.9px", fontWeight: 700 }}>
                Aqbar
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-site-secondary transition hover:bg-site-surface-muted hover:text-site-primary"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <PrimaryButton>Get in Touch</PrimaryButton>
            </div>
          </div>
        </AnimatedReveal>

        <div className="flex w-full max-w-[580px] flex-col gap-4 py-2">
          <AnimatedReveal delay={t()}>
            <p className="font-title text-site-primary" style={{ fontSize: "18px", lineHeight: 1.618, fontWeight: 700 }}>
              Raden Rosyd Aqbar Setiyanto.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={t()}>
            <p className="text-site-secondary" style={{ fontSize: "18px", lineHeight: 1.618 }}>
              I built <ServiceTypeText /> that people can actually use and AI can interact with.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={t()}>
            <p className="text-site-secondary" style={{ fontSize: "18px", lineHeight: 1.618 }}>
              Currently self-employed, previously at Quipper and Antikode.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={t()}>
            <a
              href="https://drive.google.com/file/d/1UTvICWQVGvo4jfUzWk4TnQC5R8A_iJF2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex self-start rounded-lg border border-site-border bg-transparent px-3 py-1 text-site-primary transition hover:border-site-secondary"
              style={{ fontSize: "14px", lineHeight: "20px" }}
            >
              CV/Resume
            </a>
          </AnimatedReveal>
          <AnimatedReveal delay={t()}>
            <div className="inline-flex items-center gap-2 self-start rounded-[10px] border border-site-border bg-site-card px-3 py-1">
              <span className="relative inline-block h-1 w-1">
                <span className="absolute inset-0 rounded-full bg-[#09991F]" />
                <span className="absolute -inset-1 animate-ping rounded-full bg-[#09991F]/50" />
              </span>
              <span className="text-site-primary" style={{ fontSize: "14px", lineHeight: 1.618 }}>
                Available for new opportunities
              </span>
            </div>
          </AnimatedReveal>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-4 pb-10">
        <div className="flex flex-col gap-3 py-2">
          <AnimatedReveal delay={t()}>
            <p className="font-title text-site-primary" style={{ fontSize: "18px", lineHeight: 1.618, fontWeight: 700 }}>
              Experience.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={t()}>
            <p className="text-site-secondary" style={{ fontSize: "16px", lineHeight: 1.618 }}>
              Journey through different companies, roles, and the impact I've made along the way.
            </p>
          </AnimatedReveal>
        </div>
        <div className="flex flex-col gap-4">
          {experiences.map((e) => (
            <AnimatedReveal key={e.company} delay={t()}>
              <ExperienceRow exp={e} />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioSecondaryContent() {
  return (
    <div className="flex w-full flex-col bg-site-bg">
      <div className="flex flex-col items-start gap-3 pt-8">
        <p className="text-site-secondary" style={{ fontSize: "14px", lineHeight: 1.618 }}>
          Want to see more?
        </p>
        <a
          href="https://www.linkedin.com/in/rosydaqbar/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-lg border border-site-border bg-site-button px-3 py-1 text-site-primary transition hover:bg-site-button-hover"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          View my works
        </a>
      </div>
      <div className="py-2 pt-8">
        <div className="rounded-lg border border-site-border bg-site-card px-8 py-6">
          <div className="flex flex-col gap-2">
            <p className="font-title text-site-primary" style={{ fontSize: "16px", lineHeight: 1.618 }}>
              Say Hello.
            </p>
            <p className="text-site-secondary" style={{ fontSize: "16px", lineHeight: 1.618 }}>
              Ready to work together? Let's make an impact.
            </p>
            <div className="mt-1">
              <PrimaryButton>Get in Touch</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <p className="text-site-secondary" style={{ fontSize: "12px", lineHeight: 1.618 }}>
          © 2025 Rosyd Aqbar
        </p>
      </div>
    </div>
  );
}

export function PortfolioBioPanel() {
  return (
    <div
      className="flex w-[620px] flex-col bg-site-bg pr-6"
      style={{ borderRight: "3px solid var(--site-divider)" }}
    >
      <PortfolioPrimaryContent />
      <PortfolioSecondaryContent />
    </div>
  );
}
