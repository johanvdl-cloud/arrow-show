import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function ZoomableImage({ src, alt, className, style, ...rest }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img
        {...rest}
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        className={`${className ?? ""} cursor-zoom-in transition-transform hover:scale-[1.01]`}
        style={style}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] sm:max-w-[95vw] p-2 bg-white">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[90vh] object-contain cursor-zoom-out"
            onClick={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
