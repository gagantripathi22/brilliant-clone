interface SplitTextFieldProps {
    fieldOneText: string;
    fieldTwoText: string;
    onClick: () => void;
    disabled?: boolean;
    height?: string;
    width?: string;
    className?: string;
  }
  
  const SplitTextField: React.FC<SplitTextFieldProps> = ({ fieldOneText, fieldTwoText, onClick, disabled = false, height, width = '100%', className }) => {
    return (
      <div className={`relative p-0 m-0 w-full h-fit ${className}`}>
          <input type="text" className="text-lg w-1/2 h-[50px] rounded-l-xl text-sm border-y-2 border-l-2 border-r-[1px] border-gray-300 bg-white px-4 py-2 duration-75 focus:border-gray-700 duration-75" placeholder={fieldOneText} /> 
          <input type="text" className="text-lg w-1/2 h-[50px] rounded-r-xl text-sm border-y-2 border-r-2 border-l-[1px] border-gray-300 bg-white px-4 py-2 duration-75 focus:border-gray-700 duration-75" placeholder={fieldTwoText} />
      </div>
    )
  }
  
  export default SplitTextField