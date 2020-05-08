/* eslint-disable react/display-name */
// import React from 'react'
// import Checkout from '~/pages/checkout'
// import Store from '~/pages/store'

// const routes = {
// 	'/': () => <Store />,
// 	'/checkout': () => <Checkout />,
// }

// export default routes

import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Checkout from '~/pages/checkout'
import Store from '~/pages/store'
import NotFound from '~/pages/404'

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={Store}></Route>
			<Route exac path='/checkout' component={Checkout}></Route>
			<Route component={NotFound}></Route>
		</Switch>
	</Router>
)

export default Routes
