import Link from "next/link";
import { PageHeader } from "./PageHeader";

/** Renders "[text](/path)" inside legal text as links. */
function linkify(text: string) {
  return text.split(/(\[[^\]]+\]\(\/[^)]*\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((\/[^)]*)\)$/);
    return m ? <Link key={i} href={m[2].replace(/(.)\/$/, "$1")}>{m[1]}</Link> : part;
  });
}

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string[] }[] }) {
  return (
    <>
      <PageHeader crumbs={[{ label: title }]} eyebrow={`Last updated ${updated}`} title={title} />
      <section className="gutter pb-24">
        <div className="prose-ab max-w-3xl border-t border-line pt-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p, i) => <p key={i}>{linkify(p)}</p>)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
