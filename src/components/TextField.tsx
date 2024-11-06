interface TextFieldProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  height?: string;
  width?: string;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({ text, onClick, disabled = false, height, width = '100%', className }) => {
  return (
    <div className={`relative p-0 m-0 w-full h-fit ${className}`}>
        <input type="text" className="text-lg w-full h-[50px] rounded-xl text-sm border-2 border-gray-300 bg-white px-4 py-2 duration-75 focus:border-gray-700 duration-75" placeholder={text} />
    </div>
  )
}

export default TextField