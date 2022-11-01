import { getTrackBackground, Range } from 'react-range'

function CustomRange({ value, step, min, max, onChange }) {
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values[0])}
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
                values: [value],
                colors: ['#1db954', '#535353'],
                min: min,
                max: max,
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
  )
}
export default CustomRange
