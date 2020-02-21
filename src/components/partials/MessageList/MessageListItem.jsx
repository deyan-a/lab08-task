import React from 'react';
import { connect } from 'react-redux';
import { getMessageById } from '../../../store/selectors';

function MessageListItem({ message }) {
    const { text, question, subject, team, created_at: createdAt } = message;

    return (
        <div className="message-container">
            <div className="message-row">
                <span>{subject}</span>
                <span>{team}</span>
            </div>
            <div className="message-row">
                <span>{question}</span>
                <span>{createdAt}</span>
            </div>
            <div className="message-row">
                <span>{text}</span>
            </div>
        </div>
    );
}

const mapStateToProps = (store, ownProps) => ({
    message: getMessageById(ownProps.messageId, store.threads.messages)
});

export default connect(mapStateToProps)(MessageListItem);
