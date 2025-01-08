import { useRef } from 'react';
import './index.scss';

export default function Page({ msg, img }: { msg: string; img: string }) {
  const button = useRef<HTMLDivElement | null>(null);
  console.log(button.current)
  return (
    <div className="Button button" ref={button} 
      onMouseDown={() => button.current?.classList.add("clicked")} 
      // onMouseUp={() => button.current?.classList.remove("clicked")}
    >
      <span>{msg}</span>
      <img className="svg" src={img} alt="button" />
    </div>
  );
}