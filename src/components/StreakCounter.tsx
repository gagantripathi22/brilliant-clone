import StreakIcon from '../assets/streak.png'

const StreakCounter = () => {
  return (
    <div className='flex flex-row items-center ml-5'>
        <span className='text-lg font-bold text-gray-700'>1</span>
        <img src={StreakIcon} className="w-6 h-7 ml-1" alt="streak" />
    </div>
  )
}

export default StreakCounter