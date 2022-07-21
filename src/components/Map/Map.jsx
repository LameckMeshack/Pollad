/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=kca%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default Map;
