export default function ActHeading({ act, en, ja }) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="flex items-center gap-4 mb-4">
        <span className="h-px w-10 bg-gold" />
        <span className="text-[13px] tracking-[0.25em] text-gold font-medium">
          {act}
        </span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
        {ja}
        <span className="block text-lg md:text-xl font-sans font-light tracking-[0.15em] text-ink-soft/60 mt-2">
          {en}
        </span>
      </h2>
    </div>
  );
}
