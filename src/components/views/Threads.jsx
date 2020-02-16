import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/modules/threads';
import './styles/Threads.scss';

class Threads extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.getThreads());
    }

    render() {
        const { getThreadsStatus } = this.props;

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

        return null;
    }
}

const mapStateToProps = store => ({
    getThreadsStatus: store.status?.getThreads?.status
});

export default connect(mapStateToProps)(Threads);
