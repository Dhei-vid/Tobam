"use client";
import { StaticImageData } from "next/image";
import React, { FC, useState, useEffect, CSSProperties } from "react";

interface ILazyBackground extends React.HTMLAttributes<HTMLDivElement> {
  src: string | StaticImageData;
  placeholder: string;
  children: React.ReactNode;
  style?: CSSProperties;
}
const LazyBackground: FC<ILazyBackground> = ({
  src,
  children,
  placeholder,
  style,
  ...props
}) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = typeof src === "string" ? src : src.src;

    imageLoader.onload = () => {
      setLoadedSrc(typeof src === "string" ? src : src.src);
    };
  }, [src]);

  return (
    <div
      {...props}
      style={{
        ...style,
        backgroundImage: `url(${loadedSrc || placeholder})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "25rem",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
};

export default LazyBackground;
