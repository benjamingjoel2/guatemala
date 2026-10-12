import { PageHeader } from "./PageHeader";

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string[] }[] }) {
  return (
    <>
      <PageHeader crumbs={[{ label: title }]} eyebrow={`Last updated ${updated}`} title={title} />
      <section className="gutter pb-24">
        <div className="prose-ab max-w-3xl border-t border-line pt-10">
          <p><strong>Placeholder text.</strong> Replace with documents reviewed by your legal advisor before launch.</p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
