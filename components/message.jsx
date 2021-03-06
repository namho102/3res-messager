import React from 'react';
import ClassNames from 'classnames';
import io from 'socket.io-client';

const socket = io.connect('/');

export default class Message extends React.Component {
	constructor(props) {
		console.log(props)
		super(props);
  }
	render() {
		var roleClass = ClassNames({
	  	'item host': this.props.message.role == 'host' ? true : false,
	    'item guest': this.props.message.role == 'host' ? false : true
	  });
		return (<div className={roleClass}>
			<p >{this.props.message.content}</p>
		</div>)
	}
}
