import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ChevronIcon } from "./ChevronIcon";
import problemImage from "../assets/study-case-quipper/problem-document.png";
import earlySolutionImage from "../assets/study-case-quipper/template-example.png";
import templateDesignImage from "../assets/study-case-quipper/template-design.png";
import gptSolutionImage from "../assets/study-case-quipper/gpt-solution.png";
import gptDesignImage from "../assets/study-case-quipper/gpt-design.png";
import gptResultImage from "../assets/study-case-quipper/gpt-result.png";
import finalDesignImage from "../assets/study-case-quipper/final-design.png";
import quipperVideo from "../assets/study-case-quipper/Quipper.mp4";

type QuipperStudyCaseProps = {
  onImageClick: (src: string) => void;
};

const textWidth = "w-full max-w-[562px]";
const bodyText = `${textWidth} text-[14px] leading-[1.618] text-site-primary opacity-80`;
const sectionTitle = `${textWidth} font-title text-[16px] leading-[1.618] font-bold text-site-primary`;
const majorTitle = `${textWidth} font-title text-[20px] leading-[1.618] font-bold text-site-primary`;
const studyCaseTitle = "179% Increase in Question Import Completion Rate in Quipper";

function AnimatedBlock({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex w-full flex-col items-center"
    >
      {children}
    </motion.div>
  );
}

function BackIcon() {
  return (
    <span className="flex items-center justify-center">
      <span className="-scale-y-100 flex-none rotate-180">
        <ChevronIcon size={16} />
      </span>
    </span>
  );
}

function PageHeader({ showTitle }: { showTitle: boolean }) {
  return (
    <div className="sticky top-0 z-30 h-[83px] w-full shrink-0 rounded-bl-[8px] rounded-br-[8px] bg-site-bg">
      <div className="flex h-full flex-col justify-center">
        <div className="flex h-full flex-col items-start justify-center px-[clamp(16px,4vw,34px)] py-[16px]">
          <div className="flex h-[51px] w-full items-center justify-between bg-site-bg py-[8px]">
            <div className="flex items-center gap-[16px]">
              <Link
                to="/"
                aria-label="Back to portfolio"
                className="flex items-center gap-[8px] rounded-[8px] border border-site-border bg-site-button px-[12px] py-[4px] text-site-primary transition hover:bg-site-button-hover"
              >
                <BackIcon />
                <span className="text-[12px] leading-[20px]">Back</span>
              </Link>
              <p className="font-title shrink-0 whitespace-nowrap text-[16px] font-bold leading-[1.618] text-site-primary">
                Portfolio
              </p>
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-4 text-center">
              <p className="shrink-0 whitespace-normal text-[12px] leading-[1.618] text-site-secondary">
                Study Case • Quipper
              </p>
              <motion.p
                initial={false}
                animate={showTitle ? { opacity: 1, y: 0, height: "auto" } : { opacity: 0, y: -4, height: 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="font-title max-w-[520px] overflow-hidden whitespace-nowrap text-[14px] font-bold leading-[1.618] text-site-primary"
              >
                {studyCaseTitle}
              </motion.p>
            </div>
            <div className="flex h-[26px] w-[40px] shrink-0 items-center justify-end gap-[16px] md:w-[183px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroTitle({ titleRef }: { titleRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div ref={titleRef} className="flex w-full flex-col items-center gap-[8px] text-center leading-[1.618]">
      <p className="font-title w-full max-w-[666px] text-[20px] font-bold text-site-primary sm:text-[24px]">
        {studyCaseTitle}
      </p>
      <p className="w-full max-w-[562px] text-[14px] text-site-muted">7~10 mins to read</p>
    </div>
  );
}

function HeroVideo({ onVideoClick }: { onVideoClick: (src: string) => void }) {
  return (
    <div className={textWidth}>
      <button
        type="button"
        className="block w-full cursor-zoom-in border-0 bg-transparent p-0"
        onClick={() => onVideoClick(quipperVideo)}
        aria-label="Open video preview"
      >
        <video
          src={quipperVideo}
          autoPlay
          loop
          muted
          playsInline
          className="block h-auto w-full rounded-[8px]"
        />
      </button>
    </div>
  );
}

function VideoBlock({ caption, onImageClick }: { caption: string; onImageClick: (src: string) => void }) {
  return (
    <div className={textWidth}>
      <button
        type="button"
        className="block w-full cursor-zoom-in border-0 bg-transparent p-0"
        onClick={() => onImageClick(quipperVideo)}
        aria-label={`Open video: ${caption}`}
      >
        <video
          src={quipperVideo}
          autoPlay
          loop
          muted
          playsInline
          className="block h-auto w-full rounded-[8px]"
        />
        <p className="mt-[8px] text-center text-[12px] leading-[1.618] text-site-secondary">{caption}</p>
      </button>
    </div>
  );
}

function BulletText({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-center gap-[8px]">
      <div className="flex h-[24px] shrink-0 items-center overflow-hidden py-[4px]">
        <ChevronIcon size={16} />
      </div>
      <div className={`${bodyText} whitespace-pre-wrap opacity-100`}>{children}</div>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="flex w-full flex-col items-center gap-[16px]">
      <p className={sectionTitle}>Overview</p>
      <p className={bodyText}>Quipper Link has a feature that helps teachers import questions into the platform.</p>
      <BulletText>
        <p className="mb-0 leading-[1.618]">Before, teachers had to use a fixed template from Quipper. They needed to download the template, copy their questions into it, and upload the file back to Quipper.</p>
        <p className="leading-[1.618]">The feature worked, but it still made teachers do a lot of manual work.</p>
      </BulletText>
      <BulletText>
        <p className="leading-[1.618]">After that, we tried an AI-assisted flow using GPTs. This helped teachers convert their question documents faster, but the flow was still not smooth enough. Teachers had to leave Quipper, open ChatGPT in a new tab, download the converted file, then go back to Quipper to upload it.</p>
      </BulletText>
      <BulletText>
        <p className="mb-0 leading-[1.618]">The biggest improvement happened when we changed the flow. Instead of asking teachers to use Quipper’s template, we let them upload the question documents they already had.</p>
        <p className="mb-0 leading-[1.618]">&nbsp;</p>
        <p className="mb-0 leading-[1.618]">Quipper integrate AI automatically converting teacher’s document inside Quipper directly.</p>
        <p className="mb-0 leading-[1.618]">&nbsp;</p>
        <p className="leading-[1.618]">This changed the experience completely.</p>
      </BulletText>
    </div>
  );
}

function ImpactCard() {
  return (
    <div className="w-full shrink-0 rounded-[8px] border border-site-border bg-site-card">
      <div className="flex items-center justify-between px-[32px] py-[24px]">
        <div className="flex flex-1 flex-col items-center gap-[8px] text-center text-[14px]">
          <p className="w-full max-w-[360px] leading-[1.618] text-site-secondary">As a result, the impact is</p>
          <div className="w-full text-site-primary">
            <p className="mb-0">
              <span className="leading-[1.618]">Completion rate increased from </span>
              <span className="font-bold leading-[1.618]">28.45% </span>
              <span className="font-bold leading-[1.618]">to </span>
              <span className="font-bold leading-[1.618] text-[#09991f]">79.52%</span>
            </p>
            <p>
              <span className="font-bold leading-[1.618] text-[#09991f]">+179.5%</span>
              <span className="leading-[1.618]"> relative improvement</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextSection({ title, children, major = false }: { title: string; children: React.ReactNode; major?: boolean }) {
  return (
    <div className="flex w-full flex-col items-center gap-[16px] text-site-primary">
      <p className={major ? majorTitle : sectionTitle}>{title}</p>
      <div className={bodyText}>{children}</div>
    </div>
  );
}

function CaseImage({ src, rounded = false, onClick }: { src: string; rounded?: boolean; onClick: (src: string) => void }) {
  return (
    <button
      type="button"
      className={`${textWidth} block cursor-zoom-in border-0 bg-transparent p-0 text-left`}
      onClick={() => onClick(src)}
      aria-label="Open image preview"
    >
      <img src={src} alt="" className={`block h-auto w-full ${rounded ? "rounded-[8px]" : ""}`} />
    </button>
  );
}

function FlowStep({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full shrink-0 items-center justify-center rounded-[2px] bg-site-surface-strong px-[12px] py-[10px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[2px] border border-site-border border-solid" />
      <p className="whitespace-normal text-[14px] leading-[1.618] text-site-primary">{children}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex h-[16px] w-[24px] shrink-0 items-center justify-center">
      <div className="flex-none rotate-90">
        <div className="flex h-[24px] items-center overflow-hidden py-[4px]">
          <ChevronIcon size={16} />
        </div>
      </div>
    </div>
  );
}

function FlowCard({ steps, final = false }: { steps: string[]; final?: boolean }) {
  return (
    <div className={`${final ? "bg-site-final-card" : "bg-site-card"} relative flex flex-col items-center gap-[16px] p-[24px]`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 border border-site-border border-solid" />
      <p className="font-title whitespace-nowrap text-[14px] font-bold leading-[1.618] text-site-primary">The Flow</p>
      <div className="flex w-full max-w-[410px] flex-col items-center gap-[8px]">
        {steps.map((step, index) => (
          <div key={step} className="flex w-full flex-col items-center gap-[8px]">
            <FlowStep>{step}</FlowStep>
            {index < steps.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>
    </div>
  );
}

function DesignBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${textWidth} flex flex-col items-center gap-[16px]`}>
      <p className="font-title whitespace-nowrap text-[14px] font-bold leading-[1.618] text-site-primary">The Design</p>
      {children}
    </div>
  );
}

function LearningCard() {
  return (
    <div className={`${textWidth} rounded-[8px] border border-site-border bg-site-card p-[16px]`}>
      <div className="flex w-full flex-col items-center gap-[16px] text-site-primary">
        <p className="font-title w-full text-[16px] font-bold leading-[1.618]">So, What we learned?</p>
        <div className="w-full whitespace-pre-wrap text-[14px] leading-[1.618] opacity-80">
          <p className="mb-0">The GPT experience helped us learn something important because AI could help fix the document conversion problem, but sending teachers outside Quipper created another problem. Teachers still had to read the guide then use the GPT then download the converted file then go back to Quipper and upload the right file. This made the real problem clearer because we did not only need AI to convert the document.</p>
          <p>
            <br aria-hidden="true" />
            We need a smoother experience that allows users to upload their own question documents into Quipper.
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex w-full shrink-0 flex-col items-start rounded-bl-[8px] rounded-br-[8px] py-[16px]">
      <div className="flex w-full items-center justify-center">
        <p className="shrink-0 whitespace-nowrap text-[10px] leading-[1.618] text-site-secondary">© 2025 Rosyd Aqbar</p>
      </div>
    </div>
  );
}

export function QuipperStudyCase({ onImageClick }: QuipperStudyCaseProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [showHeaderTitle, setShowHeaderTitle] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateHeaderTitle = () => {
      const title = titleRef.current;
      if (!title) return;
      setShowHeaderTitle(title.getBoundingClientRect().bottom <= 83);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateHeaderTitle);
    };

    updateHeaderTitle();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const blocks = [
    <IntroTitle titleRef={titleRef} />,
    <HeroVideo onVideoClick={onImageClick} />,
    <OverviewSection />,
    <ImpactCard />,
    <div className="flex w-full flex-col items-center gap-[32px]">
      <TextSection title="Problem">
        <p className="mb-0">Different schools use different document formats for their questions.</p>
        <p>This creates a problem for the system because Quipper needs clean and structured data to import questions correctly.</p>
      </TextSection>
      <CaseImage src={problemImage} rounded onClick={onImageClick} />
      <TextSection title="Challenge">
        <p>How might we standardize different school question document formats so Quipper can import them correctly?</p>
      </TextSection>
    </div>,
    <div className="flex w-full flex-col items-center gap-[32px]">
      <TextSection title="Early Solution" major>
        <p>The first version focused on standardization because schools used different document formats, so Quipper needed one format that the system could understand. The template helped solve this by giving teachers a fixed structure to follow. They could fill in the required question, such as the question text, answer options, correct answer, and other details. Once the file matched Quipper’s structure, the system could import the questions.</p>
      </TextSection>
      <CaseImage src={earlySolutionImage} rounded onClick={onImageClick} />
      <p className={bodyText}>This was a reasonable first solution, but it still had a clear limitation. Teachers had to adjust their documents to fit Quipper’s format. For teachers who often created questions or already understood the template, this was still usable. But for wider usage, it required too much manual work. The main issue was that teachers still had to do the conversion work themselves.</p>
      <FlowCard steps={["Download Quipper’s template.", "Open the school’s existing question document.", "Copy the questions manually.", "Upload the completed template."]} />
      <DesignBlock>
        <CaseImage src={templateDesignImage} onClick={onImageClick} />
      </DesignBlock>
      <div className={`${bodyText} whitespace-pre-wrap`}>
        <p className="mb-0">For this solution, we did not really solve the teachers’ problem. We only created a workaround that added more work for teachers on top of their existing tasks. Since this became something mandatory in their daily work, the original problem was still there. </p>
        <p className="mb-0">&nbsp;</p>
        <p className="italic">Different schools use different document formats for their questions.</p>
      </div>
      <TextSection title="New Challenge">
        <p>How might we reduce the manual work teachers need to do when converting their existing question documents into Quipper’s template?</p>
      </TextSection>
    </div>,
    <div className="flex w-full flex-col items-center gap-[32px]">
      <div className="flex w-full flex-col items-center gap-[16px]">
        <TextSection title="First Solution" major>
          <p>When AI became more common, we saw a chance to reduce the manual formatting work. Instead of asking teachers to move their questions into Quipper’s template by themselves, we tried using AI to help convert their documents. The Operations team built GPTs that could change school question documents into Quipper’s required template. </p>
        </TextSection>
        <CaseImage src={gptSolutionImage} onClick={onImageClick} />
      </div>
      <p className={bodyText}>Then the Product Design team supported the flow by adding guidance inside Quipper so teachers could open the GPT converter, use it, then return to Quipper with the converted file.</p>
      <FlowCard steps={["Open the GPT converter", "Use ChatGPT to convert the question document", "Download the converted file", "Return to Quipper", "Upload the converted file"]} />
      <DesignBlock>
        <CaseImage src={gptDesignImage} onClick={onImageClick} />
        <CaseImage src={gptResultImage} onClick={onImageClick} />
      </DesignBlock>
      <div className={`${bodyText} whitespace-pre-wrap`}>
        <p className="mb-0">This was a fast way to test whether AI could help with the question import problem, but the experience still had too much friction because teachers had to move between Quipper and ChatGPT, manage the downloaded file, and know when to return to the original tab. So even though AI helped convert the documents, the full experience was still not smooth.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          <span>The data showed this clearly through only a </span>
          <span className="font-bold text-[#ff2150]">28.45%</span>
          <span> completion rate. There was </span>
          <span className="font-bold text-[#ff2150]">78%</span>
          <span> bounce rate on the guide page.</span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>This showed that the guide alone was not enough because the real issue was the steps asking teachers to switch between too many places to finish one task.</p>
      </div>
      <LearningCard />
      <TextSection title="New Challenge">
        <p>How might we bring AI conversion directly into Quipper so teachers can upload their question document and complete the import process in one place?</p>
      </TextSection>
    </div>,
    <div className="flex w-full flex-col items-center gap-[32px]">
      <TextSection title="Final Solution" major>
        <p className="mb-0">AI integration baked directly into Import Question.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">The final solution brings AI directly into the import flow so teachers no longer need to download a Quipper template first or open ChatGPT in another tab. Instead they can upload their own question document directly inside Quipper and the system will use AI to convert it into the format Quipper needs for the question database.</p>
        <p className="mb-0">&nbsp;</p>
        <p>This is important because the real problem came from different school document formats.</p>
      </TextSection>
      <FlowCard final steps={["Upload existing question document", "AI converts the document inside Quipper", "Teacher reviews or edits the result if needed", "Import questions into Quipper"]} />
      <DesignBlock>
        <CaseImage src={finalDesignImage} onClick={onImageClick} />
      </DesignBlock>
      <TextSection title="Final Result">
        <p className="mb-0">
          <span>After integrating AI directly into the import question flow, the completion rate increased to </span>
          <span className="font-bold text-[#09991f]">79.52%.</span>
        </p>
        <p className="mt-[16px]">This showed that teachers were much more likely to finish the import process when AI conversion happened directly inside Quipper.</p>
      </TextSection>
      <VideoBlock caption="New Design Flow" onImageClick={onImageClick} />
      <TextSection title="Reflection">
        <p className="mb-[16px]">This project showed that a solution can be useful but still hard to finish if teachers have to switch between too many places.</p>
        <p>The main lesson was that AI works better when users do not have to manage it on their own.</p>
      </TextSection>
    </div>,
    <p className={`${sectionTitle} text-center`}>Thank You!</p>,
  ];

  return (
    <div className="flex min-h-[100dvh] w-full flex-col items-start gap-[10px] bg-site-bg">
      <PageHeader showTitle={showHeaderTitle} />
      <main className="w-full rounded-bl-[8px] rounded-br-[8px]">
        <div className="flex w-full flex-col items-center px-[clamp(16px,6vw,234px)] py-[16px]">
          <article className="flex w-full max-w-[780px] shrink-0 flex-col items-center gap-[48px] bg-site-bg py-[8px]">
            {blocks.map((block, index) => (
              <AnimatedBlock key={index} index={index}>
                {block}
              </AnimatedBlock>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
