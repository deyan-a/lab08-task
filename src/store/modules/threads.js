import threadsApi from '../../api/threadsApi';

const GET_THREADS = 'GET_THREADS';

const DEFAULT_STATE = {
    threadsById: {},
    allThreads: null
};

export default function(state = DEFAULT_STATE, action) {
    if (action.type === `${GET_THREADS}_FULFILLED`) {
        const threads = action.payload.data;
        const threadsById = threads.reduce((res, thread) => {
            const threadId = thread[0]['thread_id'];

            return threadId ? { ...res, [threadId]: thread } : res;
        }, {});

        return { ...state, threadsById, allThreads: threads };
    }

    return state;
}

export const getTHreads = () => ({
    type: GET_THREADS,
    payload: threadsApi.getThreads()
});
