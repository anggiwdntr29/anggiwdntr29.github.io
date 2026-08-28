type Props = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

// Menghalangi jalur mudah untuk mengambil gambar: klik kanan,
// drag, dan long-press di mobile.
//
// Ini BUKAN proteksi. Gambar yang tampil sudah terunduh ke
// perangkat pengunjung dan tetap bisa diambil lewat DevTools,
// tab Network, atau cache browser. Anggap ini sinyal, bukan kunci.
export function ProtectedImage({
  src,
  alt = "",
  className,
  width,
  height,
  loading = "lazy",
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      className={className}
      style={{
        // Mencegah menu "Save image" saat long-press di iOS/Android.
        WebkitTouchCallout: "none",
        userSelect: "none",
      }}
    />
  );
}
