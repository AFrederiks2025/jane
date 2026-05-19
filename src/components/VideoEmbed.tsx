interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export function VideoEmbed({ youtubeId, title, className = "" }: VideoEmbedProps) {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-3xl shadow-lg bg-jane-navy ${className}`}
    >
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
