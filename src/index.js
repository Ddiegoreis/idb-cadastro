import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './globalStyle'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Routes />
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
