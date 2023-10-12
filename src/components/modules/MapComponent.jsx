"use client"
import { useEffect, useRef, useState } from "react";
// import "@neshan-maps-platform/react-openlayers/dist/style.css"

import NeshanMap from "@neshan-maps-platform/react-openlayers";

const MapComponent = () => {
  const mapRef = useRef(null);

  const [ol, setOl] = useState();
  const [olMap, setOlMap] = useState();

  const onInit = (ol, map) => {
    setOl(ol);
    setOlMap(map);

    setTimeout(() => {
      const view = map.getView();

      view.animate({
        center: ol.proj.fromLonLat([51.36281969540723, 35.69672648316882]),
        zoom: 12,
        duration: 1000,
      });
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (mapRef.current?.map) {
        mapRef.current?.map.setMapType("standard-night");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NeshanMap
        mapKey="web.6a9241312d034ce9bad6d3e7193efc40"
        defaultType="neshan"
        center={{ latitude: 35.7665394, longitude: 51.4749824 }}
        style={{ height: "300px", width: "100%" }}
        onInit={onInit}
        zoom={13}
        traffic={false}
        on={[
          "click",
          (event) => {
            console.log("amirzangiabadi")
          },
        ]}
      ></NeshanMap>
    </>
  );
};

export default MapComponent;