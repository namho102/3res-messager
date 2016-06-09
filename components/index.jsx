import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../stores/messages.js';

import App from './app.jsx';
import Home from './home.jsx';

// Setup our socket events to dispatch
import MessageSocketListeners from '../socket-listeners/messages.js';
MessageSocketListeners(store);

// Material-UI theme stuff
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Render our react app!
let path = window.location.pathname;
if(path == '/') {
	ReactDOM.render(<Provider store={store} >
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<Home />
		</MuiThemeProvider>
	</Provider>, document.getElementById('main'));
}
else {
	var role = 'guest';
	if(localStorage.getItem('room')) {
			role = 'host';
	}
	var room = path.slice(1, path.length);
	ReactDOM.render(<Provider store={store} >
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<App role={role} room={room}/>
		</MuiThemeProvider>
	</Provider>, document.getElementById('main'));
}
