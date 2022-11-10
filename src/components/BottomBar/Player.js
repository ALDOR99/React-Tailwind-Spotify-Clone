import { Icon } from 'Icons'
import { useAudio } from 'react-use'
import { SecondsToTime } from 'utlies'
import CustomRange from 'components/CustomRange'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setControls } from 'stores/player'

function Player() {
  const dispatch = useDispatch()
  const { current } = useSelector((state) => state.player)

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  })

  useEffect(() => {
    controls.play()
  }, [current])

  useEffect(() => {
    dispatch(setControls(controls))
  }, [])

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return 'volumeMuted'
    if (state.volume > 0 && state.volume < 0.33) return 'volumeLow'
    if (state.volume >= 0.33 && state.volume < 0.66) return 'volumeNormal'
    return 'volumeFull'
  }, [state.volume, state.muted])

  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%] flex items-center">
        {current && (
          <div className="flex items-center">
            <div className="w-14 h-14 mr-3">
              <img src={current.image} />
            </div>

            <div>
              <h6 className="text-sm line-clamp-1">{current.title}</h6>
              <p className="text-[0.688rem] text-white text-opacity-70">
                {current.artist}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-[45.125rem] w-[40%] flex flex-col px-4 items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="shuffel" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerPrev" />
          </button>

          <button
            onClick={controls[state?.playing ? 'pause' : 'play']}
            className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
          >
            <Icon size={16} name={state?.playing ? 'pause' : 'play'} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerNext" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="repeat" />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {audio}

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
      </div>

      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="lryics" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="queue" />
        </button>

        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="device" />
        </button>

        <button
          onClick={controls[state.muted ? 'unmute' : 'mute']}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Icon size={16} name={volumeIcon} />
        </button>

        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.volume(value)
              controls.unmute()
            }}
          />
        </div>

        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="fullSreen" />
        </button>
      </div>
    </div>
  )
}
export default Player
