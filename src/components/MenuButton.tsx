import MenuIcon from '../assets/menu.png'

const MenuButton = () => {
  return (
    <div className='ml-5 cursor-pointer'>
        <img src={MenuIcon} className="w-5 h-5 mr-2" alt="menu" />
    </div>
  )
}

export default MenuButton