import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux"
import { fetchRandomMessage } from '../store/actions/messageActions';

const RandomMessage = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.content);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
        dispatch(fetchRandomMessage());
        setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Meassage</h1>
      <p>{message}</p>
    </div>
  );
};

export default RandomMessage;