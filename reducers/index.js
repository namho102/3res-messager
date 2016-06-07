
import { combineReducers } from 'redux';
import messages from './messages.js';

const messageApp = combineReducers({ messages });

export default messageApp;