import { useState } from "react";
import axios from "axios";

export function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);
  const toggleFlip = () => setIsFlipped(isFlipped => !isFlipped);

  return [isFlipped, toggleFlip];
}

export function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addData = async (urlExtension = '') => {
    const response = await axios.get(`${baseUrl}${urlExtension}`);
    setData(data => [...data, response.data]);
  };

  return [data, addData];
}

