import React from 'react';
import AppBar from 'material-ui/AppBar';
import MessageList from './messageList.jsx';
import AddMessage from './addMessage.jsx';

import { connect } from 'react-redux';

class Main extends React.Component {
	render() {
		return (<div>
			<AppBar title="Messenger" iconClassNameRight="muidocs-icon-navigation-expand-more" />
			<MessageList messages={this.props.messages} />
			<AddMessage />
		</div>);
	}
}

function mapStateToProps(messages) {
	return { messages };
}

export default connect(mapStateToProps)(Main);
