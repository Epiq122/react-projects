const url = 'https://www.course-api.com/react-tours-project';

import { useState, useEffect } from 'react';

const Tours = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTour] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return <div>Tours</div>;
};
export default Tours;
