import React from "react";
import { useFetchWithInterval } from "../../hooks/useFetchWithInterval";
import { Map } from "../Map/Map";
import { PositionInfo } from "../PositionInfo/PositionInfo";
import cl from "./Position.module.scss";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const URL = "http://api.open-notify.org/iss-now.json";

export const Position = () => {
  const [data, loading] = useFetchWithInterval(URL);
  const position = data
    ? {
        lat: Number(data.iss_position.latitude),
        lng: Number(data.iss_position.longitude),
      }
    : { lat: 0, lng: 0 };

  return (
    <div className={cl.position}>
      <div className="wrapper">
        <PositionInfo loading={loading} position={position} />
      </div>
      <Map apiKey={GOOGLE_MAPS_API_KEY} position={position} />
    </div>
  );
};
