import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'

const Routes = () => {
	return (
		<BrowserRouter>
			<Route exact path='/' component={LoginScreen} />
		</BrowserRouter>
	)
}

export default Routes
