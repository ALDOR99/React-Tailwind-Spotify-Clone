import { Icon } from 'Icons'
import { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'
import { useAudio } from 'react-use'
import { SecondsToTime } from 'utlies'

function Player() {
  const STEP = 0.1
  const MIN = 0
  const MAX = 100
  const [values, setValues] = useState([50])

  const [audio, state, controls, ref] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  })

  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]">{JSON.stringify(state)}</div>
      <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="shuffel" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerPrev" />
          </button>
          <button className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
            <Icon size={16} name="play" />
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
          <div>00:00</div>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                className="w-full h-7 flex group"
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={props.styles}
              >
                <div
                  className="h-1 w-full rounded-md self-center"
                  ref={props.ref}
                  style={{
                    background: getTrackBackground({
                      values: values,
                      colors: ['#1db954', '#535353'],
                      min: MIN,
                      max: MAX,
                    }),
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                className={`h-3 w-3 rounded-full bg-white ${
                  !isDragged ? 'opacity-0' : ''
                } group-hover:opacity-100`}
                {...props}
                style={{
                  ...props.style,

                  boxShadow: '0px 2px 6px #AAA',
                }}
              />
            )}
          />
          <div>{SecondsToTime(state?.duration)}</div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end">sağ</div>
    </div>
  )
}

export default Player
