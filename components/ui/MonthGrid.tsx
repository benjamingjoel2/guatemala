import { cn, isRainyMonth, monthNames } from "@/lib/utils";

/** Best-time-to-visit calendar: highlights ideal months and flags the May–October rainy season. */
export function MonthGrid({ bestMonths }: { bestMonths: number[] }) {
  return (
    <div>
      <ul className="grid grid-cols-4 border-l border-t border-line sm:grid-cols-6 lg:grid-cols-12" aria-label="Month by month">
        {monthNames.map((m, i) => {
          const month = i + 1;
          const best = bestMonths.includes(month);
          const rainy = isRainyMonth(month);
          return (
            <li
              key={m}
              className={cn(
                "relative flex min-h-24 flex-col justify-between border-b border-r border-line p-3",
                best && "bg-jade/25",
              )}
            >
              <span className="t-lg">{m}</span>
              <span className="flex flex-col gap-1">
                {best && <span className="t-xs font-semibold text-jade-light">Best</span>}
                {rainy && (
                  <span className="t-xs inline-flex items-center gap-1 text-adobe">
                    <svg aria-hidden viewBox="0 0 12 12" className="size-2.5" fill="currentColor"><path d="M6 1s3.5 4 3.5 6.3A3.5 3.5 0 0 1 2.5 7.3C2.5 5 6 1 6 1Z" /></svg>
                    Rainy
                  </span>
                )}
              </span>
              <span className="sr-only">{`${best ? "Best time to visit. " : ""}${rainy ? "Rainy season." : "Dry season."}`}</span>
            </li>
          );
        })}
      </ul>
      <div className="t-xs mt-4 flex flex-wrap gap-5 text-mute">
        <span className="inline-flex items-center gap-2"><span className="size-3 bg-jade/60" /> Best months</span>
        <span className="inline-flex items-center gap-2"><span className="text-adobe">●</span> Rainy season (May–October): mornings usually clear, afternoon showers</span>
      </div>
    </div>
  );
}
