import { useSelector } from "react-redux";
import { Icon } from "Icons";
import { SecondsToTime } from "utlies";
import CustomRange from "./CustomRange";

//------------------------------------------------------------------------------

function FullScreenPlayer({ toogle, state, controls, volumeIcon }) {
  const { current } = useSelector((state) => state.player);

  return (
    <div className="h-full relative">
      <div
        className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30"
        style={{ backgroundImage: `url(${current.image})` }}
      ></div>

      <div className="w-full absolute bottom-4 flex flex-col px-8 items-center">
        <div className="w-full flex items-center mb-1.5 gap-x-2">
          <div className="text-[0.688rem] text-white text-opacity-70">
            {SecondsToTime(state?.time)}
          </div>

          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />

          <div className="text-[0.688rem] text-white text-opacity-70">
            {SecondsToTime(state?.duration)}
          </div>
        </div>

        <div className="flex items-center gap-x-5 ">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="shuffel" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="playerPrev" />
          </button>

          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-16 h-16 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
          >
            <Icon size={24} name={state?.playing ? "pause" : "play"} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="playerNext" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="repeat" />
          </button>
        </div>

        <div className="flex items-center absolute bottom-3 right-6 gap-x-3">
          <button
            onClick={controls[state.muted ? "unmute" : "mute"]}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon size={24} name={volumeIcon} />
          </button>

          <div className="w-[5.813rem] max-w-full">
            <CustomRange
              step={0.01}
              min={0}
              max={1}
              value={state.muted ? 0 : state?.volume}
              onChange={(value) => {
                controls.volume(value);
                controls.unmute();
              }}
            />
          </div>

          <button
            onClick={toogle}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon size={24} name="fullSreen" />
          </button>
        </div>
      </div>
    </div>
  );
}

//---------------------------------------------------------------------

export default FullScreenPlayer;

//---------------------------------------------------------------------
