import React from "react";
import Gif from "./gif";
import NOResults from "./noResults";

const GifList = props => {
  const gifs = props.gifs;
  // console.log('HEre are teh gifs ', gifs);

  let display;

  // if no results found, set display to NoGifs component, else map over and display each GIF :)
  if (gifs.length > 0) {
    display = gifs.map(gif => {
      return (
        //  <img src={}/>
        <li className="gif-item" key={gif[1].id}>
          <img src={gif[1].images.downsized.url} />
        </li>
        // <Gif gif={gif.url} key={gif.id} alt={gif.slug} />
        // <Gif key={gif.id} alt={gif.slug} />
      );
    });
  } else {
    display = <NOResults />;
  }

  return <ul className="gif-container">{display}</ul>;
};

export default GifList;
