const HomeIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      class="Svg-ytk21e-0 jAKAlG home-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"
        fill="currentColor"
      />
    </svg>
  )
}
//--------------------------------------------------------------------------------------------------------------------------------------
const SearchIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      class="Svg-ytk21e-0 jAKAlG home-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"
        fillRule="evenodd"
        fill="currentColor"
      />
      <path
        d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
        fillRule="evenodd"
        fill="currentColor"
      />
    </svg>
  )
}

//--------------------------------------------------------------------------------------------------------------------------------------

const CollectionIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      class="Svg-ytk21e-0 jAKAlG home-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        d="M 14.5 2.134 a 1 1 0 0 1 1 0 l 6 3.464 a 1 1 0 0 1 0.5 0.866 V 21 a 1 1 0 0 1 -1 1 h -6 a 1 1 0 0 1 -1 -1 V 3 a 1 1 0 0 1 0.5 -0.866 Z M 16 4.732 V 20 h 4 V 7.041 l -4 -2.309 Z M 3 22 a 1 1 0 0 1 -1 -1 V 3 a 1 1 0 0 1 2 0 v 18 a 1 1 0 0 1 -1 1 Z m 6 0 a 1 1 0 0 1 -1 -1 V 3 a 1 1 0 0 1 2 0 v 18 a 1 1 0 0 1 -1 1 Z"
        fill="currentColor"
      />
    </svg>
  )
}

//--------------------------------------------------------------------------------------------------------------------------------------

const Icon = ({ name, size = 24 }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    collection: CollectionIcon,
  }
  const Component = icons[name]
  return <Component size={size} />
}
//--------------------------------------------------------------------------------------------------------------------------------------

export { Icon }
