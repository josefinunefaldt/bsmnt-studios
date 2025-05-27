export const ImageWrapper = ({
  src,
  alt,
  isPortrait,
}: {
  src: string;
  alt: string;
  isPortrait: (src: string) => boolean;
}) => {
  const aspectClass = isPortrait(src) ? "aspect-[2/3]" : "aspect-[3/2]";
  return (
    <div className={`w-full ${aspectClass} bg-white`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};
