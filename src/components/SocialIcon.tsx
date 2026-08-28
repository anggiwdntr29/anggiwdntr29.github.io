import type { LucideIcon } from "lucide-react";
import type { SimpleIcon } from "simple-icons";

// simple-icons memberi objek data berisi path SVG; Lucide memberi
// komponen React (objek forwardRef, jadi typeof-nya bukan "function").
// Yang dicek ciri simple-icons, bukan bentuk Lucide.
function isSimpleIcon(icon: LucideIcon | SimpleIcon): icon is SimpleIcon {
  return typeof (icon as SimpleIcon).path === "string";
}

export function SocialIcon({
  icon,
  className = "size-4",
}: {
  icon: LucideIcon | SimpleIcon;
  className?: string;
}) {
  if (isSimpleIcon(icon)) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
        className={className}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  const Icon = icon;
  return <Icon className={className} strokeWidth={1.75} />;
}
