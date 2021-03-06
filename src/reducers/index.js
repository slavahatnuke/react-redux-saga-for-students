import { GET_NEWS, NEWS_RECEIVED } from '../types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true };
    case NEWS_RECEIVED:
      const { articles } = action;
      return { ...state, articles, loading: false };
    default:
      return state;
  }
};
export default reducer;