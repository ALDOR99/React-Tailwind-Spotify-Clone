import { NavLink } from 'react-router-dom'

function Section({ title, more = false }) {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h3 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
        {more && (
          <NavLink className={'text-sm font-semibold uppercase'} to={more}>
            {' '}
            HEPSİNİ GÖR
          </NavLink>
        )}
      </header>
    </section>
  )
}
export default Section
