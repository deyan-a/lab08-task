import threadsApi from '../../api/threadsApi';

export const GET_THREADS = 'GET_THREADS';

const DEFAULT_STATE = {
    threadsById: {},
    allThreads: null,
    messages: new Map()
};

export default function(state = DEFAULT_STATE, action) {
    if (action.type === `${GET_THREADS}_FULFILLED`) {
        const threads = action.payload.data;
        const threadsById = threads.reduce((res, thread) => {
            const threadId = thread[0]['thread_id'];

            return threadId ? { ...res, [threadId]: thread } : res;
        }, {});

        const messages = threads.reduce((res, thread) => {
            return thread.reduce((msgMap, msg) => msgMap.set(msg.id, msg), res);
        }, new Map());

        return { ...state, threadsById, messages, allThreads: threads };
    }

    return state;
}

export const getThreads = () => ({
    type: GET_THREADS,
    payload: threadsApi.getThreads()
});
