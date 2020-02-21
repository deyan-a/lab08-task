import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getThreadById } from '../../../store/selectors';
import MessageListItem from './MessageListItem';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCollapsed: true };
        this.toggleMessagesList = this.toggleMessagesList.bind(this);
    }
    state = { isCollapsed: true };

    toggleMessagesList() {
        if (this.props.thread.messages.length > 1) {
            this.setState(prevState => ({
                isCollapsed: !prevState.isCollapsed
            }));
        }
    }

    render() {
        const {
            thread: { messages, score }
        } = this.props;
        const { isCollapsed } = this.state;

        if (!messages || messages.length === 0) {
            return null;
        }
        const threadSizeTitleClass = classnames('size-title', {'positive-title': score >= 6, 'negative-title': score < 6});
        const threadSize = messages.length;

        return (
            <div
                className="messages-container"
                role="button"
                tabIndex={0}
                onClick={this.toggleMessagesList}
                onKeyPress={e => e.key === 'Enter' && this.toggleMessagesList}
            >
                {threadSize > 1 &&
                    <div className="thread-size"><span className={threadSizeTitleClass}>{`${threadSize} mesages`}</span></div>
                }
                {messages.map((message, i) => (
                    <MessageListItem key={message.id} messageId={message.id} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (store, { threadId }) => ({
    thread: getThreadById(threadId, store.threads.threads)
});

export default connect(mapStateToProps)(MessageList);
