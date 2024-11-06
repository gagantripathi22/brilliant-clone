import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  height?: string;
  width?: string;
  color?: 'green' | 'black';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false, height, width = '100%', color, className }) => {
  return (
    <div className={`relative p-0 m-0 w-full h-fit ${className}`}>
      <button disabled={disabled} style={{height: height, width: width || '100%'}} className={`absolute left-0 z-50 h-[${height}px] w-[${width}px] rounded-full text-sm px-4 py-2 duration-75 active:mt-1 text-white ${color === 'green' ? `bg-custom-green-btn hover:bg-custom-green-btn-hover active:bg-custom-green-btn` : color === 'black' ? `bg-custom-black-btn hover:bg-custom-black-btn-hover active:bg-custom-black-btn` : `hover:bg-custom-green-btn-hover bg-custom-green-btn active:bg-custom-green-btn`} `}>
        {text}
      </button>
      <span style={{height: height, width: width}} className={`absolute left-0 top-1 z-10 h-[${height}px] w-[${width}px] rounded-full text-sm px-4 py-2 text-white ${color === 'green' ? `bg-custom-green-btn-bg` : color === 'black' ? `bg-custom-black-btn-bg` : `bg-custom-green-btn-bg`}`}></span>
    </div>
  )
}

export default Button