import { NavLink } from 'react-router-dom'

function Section({ title, more = false, items }) {
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
            className={'bg-footer p-4 rounded hover:bg-active'}
            key={item.id}
            to="/"
          >
            <div className="pt-[100%] relative mb-4">
              <img
                src={item.image}
                className="absolute top-0 inset-0 object-cover w-full h-full"
              />
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-xm">{item.description}</p>
          </NavLink>
        ))}
      </div>
    </section>
  )
}
export default Section
