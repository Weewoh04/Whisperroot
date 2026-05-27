type PlaceholderImageProps = {
  label: string;
  description: string;
  className?: string;
};

export default function PlaceholderImage({ label, description, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`placeholder-weave relative overflow-hidden rounded-2xl border border-creamcap/10 ${className}`}
      aria-label={description}
    >
      <div className="absolute inset-x-6 top-6 h-px root-vein" />
      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amberglow/85">{label}</p>
        <p className="mt-2 text-sm leading-5 text-creamcap/78">{description}</p>
      </div>
    </div>
  );
}
