import { NavLink } from "react-router-dom";

//--------------------------------------------------------------------------

function Title({ title, more = false }) {
  return (
    <header className="mb-4 flex items-center justify-between">
      <NavLink to={more ?? "#"}>
        <h3 className="text-2xl hover:underline text-white font-semibold tracking-tight">
          {title}
        </h3>
      </NavLink>

      {more && (
        <NavLink
          className={
            "text-xs hover:underline font-semibold uppercase text-link tracking-wider"
          }
          to={more}
        >
          HEPSİNİ GÖR
        </NavLink>
      )}
    </header>
  );
}
export default Title;
