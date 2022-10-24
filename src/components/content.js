import { Switch, Route } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Home from 'views/Home'
import Search from 'views/Search'
import Collection from 'views/Collection'

function Content() {
  return (
    <main className="flex-auto">
      <Navbar />
      <div className="px-8 pt-5">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/Collection">
            <Collection />
          </Route>
        </Switch>
      </div>
    </main>
  )
}
export default Content
