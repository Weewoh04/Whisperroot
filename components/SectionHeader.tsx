type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amberglow">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold text-creamcap sm:text-5xl">{title}</h1>
      {description ? <p className="mt-4 text-base leading-7 text-creamcap/68">{description}</p> : null}
    </div>
  );
}
