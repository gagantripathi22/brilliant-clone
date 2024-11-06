import React from 'react'

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon: string;
  current: boolean;
}

const HeaderNavButton: React.FC<ButtonProps> = ({ text, onClick, icon, current }) => {
  return (
    <div className={`h-full w-fit flex flex-col justify-center mr-5 cursor-pointer' onClick={onClick} ${!current && 'opacity-50'}`}>
        <div className='flex flex-row justify-center items-center h-full'>
            <img src={icon} className="w-5 h-5 mr-2" alt="home" />
            <span className='font-bold'>{text}</span>
        </div>
        <span className={`w-full h-[2px] ${current ? 'bg-black' : 'bg-white'}`}></span>
    </div>
  )
}

export default HeaderNavButton