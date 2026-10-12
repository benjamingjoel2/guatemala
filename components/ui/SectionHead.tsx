import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { SplitHeading } from "./motion";

/** Reference pattern: heading block left, supporting copy / action right, aligned to baseline. */
export function SectionHead({
  eyebrow,
  title,
  text,
  action,
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  action?: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-24", className)}>
      <div className="flex max-w-3xl flex-col gap-4">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <SplitHeading as={as} text={title} className={as === "h1" ? "t-h1" : "t-h2"} />
      </div>
      {(text || action) && (
        <div className="flex max-w-md flex-col items-start gap-6 md:items-end md:text-right">
          {text && <p className="t-md text-mute">{text}</p>}
          {action}
        </div>
      )}
    </div>
  );
}
