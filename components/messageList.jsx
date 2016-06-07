import React from 'react';
import { Table, TableBody } from 'material-ui/Table';
import Message from './message.jsx';

export default class MessageList extends React.Component {
	render() {
		return (<div className='messages'>
			{this.props.messages.map(message => <Message key={message.id} message={message} /> )}
		</div>);
	}
}
