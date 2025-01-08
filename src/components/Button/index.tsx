import { useRef } from 'react';
import './index.scss';

export default function Page({ msg, img, path }: { msg: string; img?: string; path?: string }) {
  const button = useRef<HTMLAnchorElement | null>(null);
  
  return (
    <a
      className="Button button"
      ref={button}
      onMouseDown={() => button.current?.classList.add("clicked")}
      // onMouseUp={() => button.current?.classList.remove("clicked")}
      href={path ? path : undefined} // Set href only if path is provided
    >
      <span>{msg}</span>
      {img && <img className="svg" src={img} alt="button" />} {/* Render img only if provided */}
    </a>
  );
}