import React from "react";
import { useSelector } from "react-redux";

export const PositionInfo = () => {
  const position = useSelector((state) => state.position);

  return (
    <>
      {position && (
        <>
          <h2>ISS is now located at</h2>
          <div>
            longitude: {position.lng}, latitude: {position.lat}
          </div>
        </>
      )}
    </>
  );
};
