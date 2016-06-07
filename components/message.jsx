import React from 'react';
import io from 'socket.io-client';

const socket = io.connect('/');

export default class Message extends React.Component {
	render() {
		return (<div>
			<p>{this.props.message.content}</p>
		</div>)
	}
}
