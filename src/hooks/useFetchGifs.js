import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const gifs = getGifs(category);
    gifs.then((resp) => {
      setImages(resp);
      setIsLoading(false);
    });
  }, []);

  return { images, isLoading };
};

export default useFetchGifs;
