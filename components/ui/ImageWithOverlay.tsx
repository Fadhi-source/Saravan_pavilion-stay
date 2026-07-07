import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
}

export function ImageWithOverlay({
  src,
  alt,
  className,
  overlayClassName,
  priority,
}: ImageWithOverlayProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-2xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent",
          overlayClassName
        )}
      />
    </div>
  );
}
