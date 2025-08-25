import React from "react";

type ImageWrapperProps = {
  src?: string;
  alt?: string;
  isPortrait?: (src: string) => boolean;
  component?: React.ReactNode;
};

export const ImageWrapper = ({
  src,
  alt,
  isPortrait,
  component,
}: ImageWrapperProps) => {
  // If a component is passed, render it directly
  if (component) {
    return <div className="w-full">{component}</div>;
  }

  if (!src || !alt || !isPortrait) {
    return null; // nothing to render
  }

  const aspectClass = isPortrait(src) ? "aspect-[2/3]" : "aspect-[3/2]";
  return (
    <div className={`w-full ${aspectClass} bg-white`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};
