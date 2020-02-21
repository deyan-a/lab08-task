import React from 'react';
import { connect } from 'react-redux';
import { getMessageById } from '../../../store/selectors';

function MessageListItem({ message }) {
    const { text, question, subject, team, created_at: createdAt, score } = message;

    const titleClass = score > 6 ? 'positive-score' : 'negative-score';
    const createdDate = new Date(createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short'});

    return (
        <div className="message-container">
            <div className="message-row">
                <span className={titleClass}>{subject}</span>
                <span>{team}</span>
            </div>
            <div className="message-row">
                <span className='message-question'>{question}</span>
                <span className="message-date">{createdDate}</span>
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
