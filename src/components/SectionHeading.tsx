interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className = "",
  children,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-jane-orange uppercase tracking-[0.18em] text-sm font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-light leading-tight text-jane-navy">
        {title}
      </h2>
      {children && <div className="mt-5 text-jane-navy/80 text-lg">{children}</div>}
    </div>
  );
}
