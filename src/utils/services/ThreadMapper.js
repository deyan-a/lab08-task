const foldThreadsById = threads => {
    return threads.reduce((res, thread) => {
        const threadId = thread[0]['thread_id'];

        if (!threadId) {
            return res;
        }

        const threadScore = thread.reduce((total, m) => total + (m.score || 0), 0);
        const score = threadScore / thread.length;

        return {
            ...res,
            [threadId]: {
                messages: thread,
                score
            }
        };
    }, {});
};

const foldMessagesById = threads => {
    return threads.reduce((res, thread) => {
        return thread.reduce((res, msg) => ({ ...res, [msg.id]: msg }), res);
    }, {});
};

export const mergeThreads = (threads, state) => {
    const threadsById = foldThreadsById(threads);
    const messages = foldMessagesById(threads);
    return { ...state, threads: threadsById, messages, allThreads: threads };
};
