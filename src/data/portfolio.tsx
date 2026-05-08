import { Facebook, Linkedin, Sparkles, Twitter } from "lucide-react";
import imgImage31 from "../assets/portfolio/bitwyre-cover.png";
import imgImage32 from "../assets/portfolio/dominus-cover.png";
import imgImage33 from "../assets/portfolio/innovatetech-cover.png";
import imgImage34 from "../assets/portfolio/axisnet-cover.png";
import imgBitwyre2 from "../assets/portfolio/bitwyre-market.png";
import imgBitwyre3 from "../assets/portfolio/bitwyre-leaderboard.png";
import imgDominus2 from "../assets/portfolio/dominus-landing.png";
import imgAxis2 from "../assets/portfolio/axisnet-package.png";
import imgInnovate2 from "../assets/portfolio/innovatetech-landing.png";
import imgInnovate3 from "../assets/portfolio/innovatetech-dashboard.png";
import imgQuipper1 from "../assets/portfolio/quipper-monitor.png";
import imgQuipper2 from "../assets/portfolio/quipper-report.png";
import imgQuipper3 from "../assets/portfolio/quipper-import.png";

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/rosydaqbar/", Icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rosydaqbar/", Icon: Linkedin },
  { label: "X", href: "https://x.com/nedar_r", Icon: Twitter },
];

export const experiences = [
  {
    company: "Quipper",
    role: "Product Designer",
    location: "Remote",
    period: "2022 - 2026",
    bullets: [
      {
        text: "Improved the question import experience by redesigning the flow from a template-based upload into an AI-assisted document upload, increasing completion rate from 28.45% to 79.52%.",
        cta: { label: "Read Study Case", href: "/study/quipper-import" },
      },
      "Revamped the entire design system by modernizing outdated design standards, improving overall quality, and increasing design delivery speed by 40%.",
      "Conducted to Product-Market Fit research to identify key user problems and help prioritize product roadmap decisions.",
      "Revamped the user interface of the QLink Learning Management System (LMS) for users in Indonesia and the Philippines, contributing to increased in overall teacher participation.",
      "Designed new Periodic Report a feature to compare related diagnostic report which led to a 50% success rate according to Usability Test.",
      "Improved assignment creation and delivery for teachers by reducing the flow from 19 steps to 9 steps, achieving a 52.6% reduction in required steps.",
      "Designed a student cheating-activity detection and bulk follow-up workflow for teachers, based on research and usability testing, reducing task completion time by over 85% and making the task 6.7× faster to complete.",
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
] as const;

export const galleryItems = [
  {
    title: "Quipper",
    description: (
      <>
        Cheating detection monitor platform, Students periodic reports, Content search, Syllabus, and{" "}
        <span className="inline-flex items-center gap-1 align-baseline">
          <Sparkles size={12} className="text-site-primary" />
          AI import questions
        </span>
      </>
    ),
    images: [imgQuipper1, imgQuipper2, imgQuipper3],
    link: "/study/quipper-import",
  },
  {
    title: "Bitwyre",
    description: "Landing Page, Market Monitor, and Leaderboard.",
    images: [imgImage31, imgBitwyre2, imgBitwyre3],
    link: "http://bit.ly/4tyxpmp",
  },
  {
    title: "Dominus",
    description: "High conversion and interactive landing page",
    images: [imgImage32, imgDominus2],
    link: "https://bit.ly/dominuslanding",
  },
  {
    title: "InnovateTech",
    description: "Pitch landing page design for an all-in-one task management SaaS concept.",
    images: [imgImage33, imgInnovate2, imgInnovate3],
    link: "https://bit.ly/4do0hsr",
  },
  {
    title: "Axis NET",
    description: "Build your own package feature",
    images: [imgImage34, imgAxis2],
    link: "https://bit.ly/3RkeQod",
  },
] as const;
