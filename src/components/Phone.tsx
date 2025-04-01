import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

interface IPhoneProps extends HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
  imgSrc: string;
}

const Phone = ({ className, dark = false, imgSrc, ...props }: IPhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        className="relative pointer-events-none z-50 overflow-hidden"
        src={
          dark
            ? "/phone-template-dark-edges.webp"
            : "/phone-template-white-edges.webp"
        }
        alt="Phone image"
        width={390}
        height={844}
        priority
      />
      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover"
          src={imgSrc}
          alt="Phone image overlay"
          fill
          sizes="(max-width: 768px) 100vw, 390px"
        />
      </div>
    </div>
  );
};

export default Phone;
