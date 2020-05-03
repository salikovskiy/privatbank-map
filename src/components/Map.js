import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.4501,
    longitude: 30.523399,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/salikovskiy/ck9qvxuc90kz61inofajzocfd"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      markers here
    </ReactMapGL>
  );
};

export default Map;
