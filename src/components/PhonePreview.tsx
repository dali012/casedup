"use client";

import { CaseColor } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { COLORS } from "@/validators/option-validator";

const PhonePreview = ({
  croppedImageUrl,
  userColor,
}: {
  croppedImageUrl: string;
  userColor: CaseColor;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [rendredDimensions, setRendredDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    if (!ref.current) {
      return;
    }
    const { width, height } = ref.current.getBoundingClientRect();
    setRendredDimensions({ width, height });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const caseBackgroundColor =
    COLORS.find((color) => color.value === userColor)?.tw || "bg-zinc-950";

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            rendredDimensions.width / 2 -
            rendredDimensions.width / (1216 / 121),
          top: rendredDimensions.height / 6.22,
        }}
      >
        <img
          width={rendredDimensions.width / (3000 / 637)}
          alt="preview image"
          className={cn(
            "phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
            caseBackgroundColor
          )}
          src={croppedImageUrl}
        />
      </div>
      <div className="relative h-full w-full z-40">
        <img
          alt="phone"
          src="/clearphone.webp"
          className="pointer-events-none h-full w-full antialiased rounded-md"
        />
      </div>
    </AspectRatio>
  );
};

export default PhonePreview;
