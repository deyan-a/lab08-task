import React from 'react';
import { connect } from 'react-redux';

const MessageList = ({ messages }) => {
    return messages.map(message => <div key={message.id}>{message.text}</div>);
};

const mapStateToProps = (store, { threadId }) => ({
    messages: store.threads.threadsById[threadId]
});

export default connect(mapStateToProps)(MessageList);
