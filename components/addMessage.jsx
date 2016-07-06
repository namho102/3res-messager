import React from 'react';

import TextField from 'material-ui/TextField';

// Import socket and connect
import io from 'socket.io-client';
const socket = io.connect('/');

export default class AddMessage extends React.Component {
	constructor(props) {
		super(props);
		//  console.log(props)
		this.state = { open: false };
	};

	handleNewMessageInput = (event) => {
		if (event.keyCode === 13) {
			if (event.target.value && event.target.value.length > 0) {
				console.log('new mes');

				// Emit socket event for new todo
				socket.emit('insert', {
					content: event.target.value,
					role: this.props.role,
					room: this.props.room,
					createdAt: new Date()
				});

				event.target.value = '';
			}
			else {
				this.setState({ error: "You've entered an empty message!"});
			}
		}
	};

	render() {
		return (<div>
			<TextField style={{ margin: 20 }}
					hintText="new message"
					errorText={ this.state.error }
					onKeyDown={this.handleNewMessageInput} />
		</div>)
	};
}
