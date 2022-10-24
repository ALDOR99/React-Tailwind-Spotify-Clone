import Navigation from './Navbar/Navigation'
import Auth from './Navbar/Auth'
import { useRouteMatch } from 'react-router-dom'

//--------------------------------------------------------------------------------------------------------

function Navbar() {
  const searchRoute = useRouteMatch('/search')

  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />

      {searchRoute && <div>Search kısmındasın</div>}
      {/* <Switch>
        <Route exact path="/">
          Home
        </Route>

        <Route path="/search">
          Search
        </Route>

        <Route path="/Collection">
          Collection
        </Route>
      </Switch> */}
      <Auth />
    </nav>
  )
}
export default Navbar
