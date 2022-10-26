import { NavLink } from 'react-router-dom'
import { Home } from 'views/Home.js'

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

      <div className="grid grid-cols-4">
        {items.map((item) => (
          <NavLink key={item.id} to="/">
            {item.title}
          </NavLink>
        ))}
      </div>
    </section>
  )
}
export default Section
