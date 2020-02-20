import threadsApi from '../../api/threadsApi';
import * as ThreadMapper from '../../utils/services/ThreadMapper';

export const GET_THREADS = 'GET_THREADS';

const DEFAULT_STATE = {
    threads: {},
    allThreads: null,
    messages: {}
};

export default function(state = DEFAULT_STATE, action) {
    if (action.type === `${GET_THREADS}_FULFILLED`) {
        return ThreadMapper.mergeThreads(action.payload.data, state);
    }

    return state;
}

export const getThreads = () => ({
    type: GET_THREADS,
    payload: threadsApi.getThreads()
});
