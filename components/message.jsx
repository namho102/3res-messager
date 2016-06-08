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
	  	'host': this.props.message.role == 'host' ? false : true,
	    'guest': this.props.message.role == 'host' ? true : false
	  });
		return (<div>
			<p className={roleClass}>{this.props.message.role}: {this.props.message.content}</p>
		</div>)
	}
}
