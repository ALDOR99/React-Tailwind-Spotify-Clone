import { Icon } from 'Icons'
import { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'

function Player() {
  const STEP = 0.1
  const MIN = 0
  const MAX = 100
  const [values, setValues] = useState([50])
  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]">sol</div>
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
        <div className="w-full">
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            //onChange={(values) => this.setState({ values })}
            renderTrack={({ props, children }) => (
              <div
                className="w-full h-7 flex"
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
                className="h-3 w-3 rounded-full bg-white"
                {...props}
                style={{
                  ...props.style,

                  boxShadow: '0px 2px 6px #AAA',
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end">sağ</div>
    </div>
  )
}
export default Player
