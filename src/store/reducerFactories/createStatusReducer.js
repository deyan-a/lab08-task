import { camelCase } from 'change-case';

const createStatusReducer = fields => (state = {}, action) => {
    const actionTypeWithNoStatus = action.type.replace(
        /(_PENDING|_FULFILLED|_REJECTED|_RESET)/,
        ''
    );
    const fieldToUpdate = fields.find(
        field => field.action === actionTypeWithNoStatus
    );

    if (fieldToUpdate) {
        const actionStatus = action.type
            .split('_')
            .pop()
            .toLowerCase();
        const key = camelCase(fieldToUpdate.action);

        return {
            ...state,
            [key]: {
                ...state[key],
                status: actionStatus,
                statusCode: action.payload && action.payload.status
            }
        };
    }

    return state;
};

export default createStatusReducer;
