import { current } from "@reduxjs/toolkit";
import { Icon } from "Icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrent } from "../../src/stores/player";

function SongItem({ item }) {
  const dispatch = useDispatch();

  const { current, playing } = useSelector((state) => state.player);

  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";
      default:
        return "rounded";
    }
  };

  const isCurrentItem = current?.id === item.id && playing;

  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };

  return (
    <NavLink
      className={"bg-footer p-4 rounded hover:bg-active group"}
      key={item.id}
      to="/"
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image}
          className={`absolute top-0 inset-0 object-cover w-full h-full ${imageStyle(
            item
          )}`}
        />

        <button
          onClick={updateCurrent}
          className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center ${
            !isCurrentItem ? "" : "hidden"
          }`}
        >
          <Icon
            name={isCurrentItem?.id === item.id && playing ? "pause" : "play"}
            size={16}
          />
        </button>
      </div>

      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>

      <p className="line-clamp-2 text-link text-xm mt-1">{item.description}</p>
    </NavLink>
  );
}
export default SongItem;
