import { t } from "@/i18n/server";
import { SectionHead } from "@/components/ui/SectionHead";
import { Stagger, StaggerItem } from "@/components/ui/motion";

const steps = () => [
  {
    title: t("Tell us your ideas"),
    text: t("Five quick questions about dates, pace, budget and who is travelling. Or just send us an email."),
    icon: (
      <path d="M6 10h24v16H14l-8 6V10Z M12 16h12 M12 21h8" />
    ),
  },
  {
    title: t("Meet your specialist"),
    text: t("One named, Antigua-based expert replies within a day and gets to know how you like to travel."),
    icon: <path d="M18 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z M8 31a10 10 0 0 1 20 0" />,
  },
  {
    title: t("Shape your route"),
    text: t("Your draft itinerary, priced clearly. Tweak hotels, swap days, add experiences until it feels right."),
    icon: <path d="M6 28 14 8l8 14 4-6 6 12Z M20 8h10 M25 3v10" />,
  },
  {
    title: t("Travel, fully supported"),
    text: t("Drivers waiting, guides briefed, and your specialist on call 24/7 until the day you fly home."),
    icon: <path d="M18 4a10 10 0 0 1 10 10c0 8-10 18-10 18S8 22 8 14A10 10 0 0 1 18 4Z M18 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
  },
];

export function HowItWorks() {
  return (
    <section className="gutter section-pad" aria-label={t("How it works")}>
      <SectionHead
        eyebrow={t("How it works")}
        title={t("How Antigua & Beyond works")}
        text={t("No call centres, no hand-offs. The person who plans your trip is the person you message from the road.")}
        className="mb-10 md:mb-14"
      />
      <Stagger as="ul" className="grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps().map((s, i) => (
          <StaggerItem as="li" key={s.title} className="flex min-h-52 flex-col gap-10 lg:justify-between lg:gap-16">
            <div className="flex items-start gap-3">
              <svg aria-hidden viewBox="0 0 36 36" className="h-12 w-12 text-jade-light" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
                {s.icon}
              </svg>
              <span className="text-[0.625rem] font-semibold leading-none text-faint">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="t-lg">{s.title}</h3>
              <p className="t-md font-normal text-mute">{s.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
