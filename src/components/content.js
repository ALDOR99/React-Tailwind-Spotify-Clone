import { Switch, Route } from '/src/views/react-router-dom'
import Navbar from './Navbar'

import Home from '../views/Home'
import Search from '../views/Search'
import { Form } from 'react-router-dom'

function Content() {
  return (
    <main className="flex-auto">
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </main>
  )
}
export default Content
