import React from 'react';
import { connect } from 'react-redux';
import MessageList from '../partials/MessageList';
import * as actions from '../../store/modules/threads';

class Threads extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.getThreads());
    }

    render() {
        const { getThreadsStatus, threadsById } = this.props;

        if (!getThreadsStatus || getThreadsStatus === 'pending') {
            return <div className="message">Loading..</div>;
        }

        if (getThreadsStatus === 'rejected') {
            return (
                <div className="error">
                    An error occurred. Please try again later.
                </div>
            );
        }
        const threadsIds = Object.keys(threadsById);

        return threadsIds.lenght < 1 ? (
            <div className="message">
                Currently there are no available messages
            </div>
        ) : (
            threadsIds.map(id => <MessageList key={id} threadId={id} />)
        );
    }
}

const mapStateToProps = store => ({
    getThreadsStatus: store.status?.getThreads?.status,
    threadsById: store.threads.threadsById
});

export default connect(mapStateToProps)(Threads);