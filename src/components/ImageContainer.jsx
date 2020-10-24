import React, { useEffect, useState } from 'react';
import {Image} from './Image';
import InfiniteScroll from 'react-infinite-scroll-component';
import unsplash from '../services/unsplash';

export function ImageContainer() {

  const topic = 'nature';

  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);

  useEffect( ()=> {
    unsplash.search.photos(topic,pageNumber)
    .then(raw=>raw.json())
    .then(res=>{
      setImages(res.results);
    });
  },[])

  const fetchImages = ()=> {
      unsplash.search.photos(topic,pageNumber)
      .then(raw=>raw.json())
      .then(res=>{
        setHasMorePages(pageNumber<res.total_pages);
        setImages(images.concat(res.results));
        setPageNumber(pageNumber+1);
      });
  };

    return (
      
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={hasMorePages}>
          {images.map(image => <Image key={image.id+pageNumber} imageData={image} />)}
        </InfiniteScroll>
      
    )
  
}

export default ImageContainer;