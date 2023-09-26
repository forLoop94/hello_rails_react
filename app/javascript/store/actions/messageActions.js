import { setMessage } from '../reducers/messageReducer';

export const fetchRandomMessage = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/random_message');
      const data = await response.json();
      dispatch(setMessage(data.message));
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };
};