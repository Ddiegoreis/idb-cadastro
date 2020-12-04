import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import HomeScreen from './pages/HomeScreen'

const Routes = () => {
	return (
		<BrowserRouter>
			<Route exact path='/' component={LoginScreen} />
			<Route exact path='/Home' component={HomeScreen} />
		</BrowserRouter>
	)
}

export default Routes
