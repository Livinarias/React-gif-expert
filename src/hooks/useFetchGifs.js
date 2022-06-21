import { useEffect, useState } from "react";
import { Getgifs } from "../helpers/GetGif";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect( () =>{
        Getgifs(category)
        .then(newImages => setImages(newImages));
        setisLoading(false);
    }, []);

  return {
    images,
    isLoading: false
  }
}
