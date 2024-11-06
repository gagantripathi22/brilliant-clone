import SearchIcon from '../assets/search.png'

interface SearchbarProps {
  width?: string;
  onClick: () => void;
}

const Searchbar = ({ width = "96", onClick }) => {
  return (
    <div className={`h-10 w-${width} bg-[#EBEBEB] rounded-lg flex flex-row items-center`} onClick={onClick}>
        <img src={SearchIcon} className="w-7 h-7 mr-2 ml-3" alt="search" />
        <input type="text" className="text-sm w-full h-full bg-transparent mr-5" placeholder="Search" />
    </div>
  )
}

export default Searchbar