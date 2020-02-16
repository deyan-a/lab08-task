import createStatusReducer from '../reducerFactories/createStatusReducer';
import { GET_THREADS } from './threads';

export default createStatusReducer([{ action: GET_THREADS }]);
