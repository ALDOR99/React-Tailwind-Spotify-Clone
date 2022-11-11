import { useSelector } from 'react-redux'

function SidebarCover() {
  const current = useSelector((state) => state.player.current)
  return (
    <div className="pt-[100%] relative bg-black">
      <img
        src={current.image}
        className="w-full h-full object-cover absolute top-0 left-0"
      ></img>
    </div>
  )
}

export default SidebarCover
