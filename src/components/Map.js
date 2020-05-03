import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import services from "../services";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.4501,
    longitude: 30.523399,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [data, setData] = useState(
    services.getOfficeAddress("Киев").then((data) => {
      return data;
    })
  );

  useEffect(() => {
    console.log(data);
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
