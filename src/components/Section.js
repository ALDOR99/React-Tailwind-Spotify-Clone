import { NavLink } from 'react-router-dom'
import SongItem from '../../src/components/SongItem'

function Section({ title, more = false, items }) {
  return (
    <section>
      <header className="mb-4 flex items-center justify-between">
        <NavLink to={more ?? '#'}>
          <h3 className="text-2xl hover:underline text-white font-semibold tracking-tight">
            {title}
          </h3>
        </NavLink>

        {more && (
          <NavLink
            className={
              'text-xs hover:underline font-semibold uppercase text-link tracking-wider'
            }
            to={more}
          >
            HEPSİNİ GÖR
          </NavLink>
        )}
      </header>

      <div className="grid grid-cols-7 gap-x-6">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
export default Section
