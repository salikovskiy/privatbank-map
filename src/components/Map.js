import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import * as data from "../data.json";
// import services from "../services";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  // PrivatBank API doesn't work
  // const [data, setData] = useState(
  //   services.getOfficeAddress("Киев").then((data) => {
  //     return data;
  //   })
  // );
  // useEffect(() => {
  //   console.log(data);
  // });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/salikovskiy/ck9qvxuc90kz61inofajzocfd"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      {data.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          latitude={park.geometry.coordinates[1]}
          longitude={park.geometry.coordinates[0]}
        >
          <img
            src="/placeholder.svg"
            alt="Skateboard icon"
            style={{ width: "20px", height: "20px" }}
          />
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;
