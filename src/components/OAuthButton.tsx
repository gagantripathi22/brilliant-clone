import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  height?: string;
  width?: string;
  icon: string;
}

const OAuthButton: React.FC<ButtonProps> = ({ text, onClick, disabled = false, height, width = '100%', icon }) => {
  return (
    <div className="relative p-0 m-0 w-full h-[50px]">
      <button onClick={onClick} disabled={disabled} style={{height: height, width: width || '100%', borderColor: '#D9D9D9', borderWidth: '2px'}} className={`absolute text-black left-0 z-50 h-[${height}px] w-[${width}px] rounded-full text-sm bg-white px-4 py-2 duration-75 active:mt-1 active:bg-gray-100 flex items-center justify-center`}>
        {/* {text} */}
        <img src={icon} className="w-5 h-5" alt="google" />
      </button>
      <span style={{height: height, width: width}} className={`absolute left-0 top-1 z-10 h-[${height}px] w-[${width}px] rounded-full text-sm bg-[#D9D9D9] px-4 py-2 text-white`}></span>
    </div>
  )
}

export default OAuthButton