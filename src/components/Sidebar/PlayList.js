function PlayList() {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        {new Array(10).fill(
          <li>
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              Aldor
            </a>
          </li>,
        )}
      </ul>
    </nav>
  )
}
export default PlayList
{
  new Array(30).fill()
}
