const mapThreadsById = threads => {
    return threads.reduce((res, thread) => {
        const threadId = thread[0]['thread_id'];

        return threadId ? { ...res, [threadId]: thread } : res;
    }, {});
};

const mapMessagesById = threads => {
    return threads.reduce((res, thread) => {
        return thread.reduce((res, msg) => ({ ...res, [msg.id]: msg }), res);
    }, {});
};

export const mergeThreads = (threads, state) => {
    const threadsById = mapThreadsById(threads);
    const messages = mapMessagesById(threads);

    return { ...state, threads: threadsById, messages, allThreads: threads };
};
