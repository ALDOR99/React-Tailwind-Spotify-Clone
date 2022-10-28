import { NavLink } from 'react-router-dom'
import { Icon } from 'Icons'

function Section({ title, more = false, items }) {
  const imageStyle = (item) => {
    switch (item.type) {
      case 'artist':
        return 'rounded-full'
      case 'podcast':
        return 'rounded-lg'
      default:
        return 'rounded'
    }
  }

  return (
    <section>
      <header className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
        {more && (
          <NavLink
            className={
              'text-xs hover:underline font-semibold uppercase text-link'
            }
            to={more}
          >
            HEPSİNİ GÖR
          </NavLink>
        )}
      </header>

      <div className="grid grid-cols-7 gap-x-6">
        {items.map((item) => (
          <NavLink
            className={'bg-footer p-4 rounded hover:bg-active group'}
            key={item.id}
            to="/"
          >
            <div className="pt-[100%] relative mb-4">
              <img
                src={item.image}
                className={`absolute top-0 inset-0 object-cover w-full h-full ${imageStyle(
                  item,
                )}`}
              />
              <button className="w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center hidden">
                <Icon name="play" size={16} />
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-xm mt-1">
              {item.description}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  )
}
export default Section
