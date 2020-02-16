import React from 'react';
import { connect } from 'react-redux';
import { getThreadById } from '../../../store/selectors';

const MessageList = ({ messages }) => {
    return messages.map(message => <div key={message.id}>{message.text}</div>);
};

const mapStateToProps = (store, { threadId }) => ({
    messages: getThreadById(threadId, store.threads.threadsById)
});

export default connect(mapStateToProps)(MessageList);
