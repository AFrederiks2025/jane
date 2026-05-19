import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "orange" | "mint" | "navy" | "ghost";

const variants: Record<Variant, string> = {
  orange:
    "bg-jane-orange text-white hover:bg-[#b94f17] focus-visible:outline-jane-orange",
  mint:
    "bg-jane-mint text-white hover:bg-[#038f74] focus-visible:outline-jane-mint",
  navy:
    "bg-jane-navy text-white hover:bg-[#1a234a] focus-visible:outline-jane-navy",
  ghost:
    "bg-transparent text-jane-navy border border-jane-navy/30 hover:bg-jane-navy hover:text-white focus-visible:outline-jane-navy",
};

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm uppercase tracking-[0.12em] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type LinkProps = CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type ButtonProps = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

export function PillButton(props: LinkProps | ButtonProps) {
  const { variant = "orange", className = "", children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;
  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as LinkProps;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
