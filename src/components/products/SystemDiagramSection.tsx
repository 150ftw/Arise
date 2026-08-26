import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { Reveal } from "@/components/ui/Reveal";
import { FlowDiagram } from "@/components/products/FlowDiagram";

type DiagramConfig = {
  width: number;
  height: number;
  nodes: { id: string; label: string; sublabel?: string; x: number; y: number; w?: number; h?: number; accent?: boolean }[];
  edges: { from: string; to: string; dashed?: boolean }[];
};

export function SystemDiagramSection({
  id,
  index,
  eyebrow,
  title,
  description,
  diagram,
  points,
  tone = "paper",
}: {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  diagram: DiagramConfig;
  points?: string[];
  tone?: "paper" | "white";
}) {
  return (
    <section id={id} className={`scroll-mt-[150px] py-16 sm:py-20 ${tone === "paper" ? "bg-brand-paper" : "bg-white"}`}>
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow={`Products · ${String(index + 1).padStart(2, "0")} · ${eyebrow}`} title={title} description={description} />
        <Reveal className="mt-10 border border-brand-line bg-white p-6 sm:p-10">
          <FlowDiagram nodes={diagram.nodes} edges={diagram.edges} width={diagram.width} height={diagram.height} />
        </Reveal>
        {points ? (
          <Reveal delay={0.1} className="mt-8 max-w-2xl">
            <BulletList items={points} />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
