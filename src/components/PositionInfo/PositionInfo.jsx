import React from "react";

export const PositionInfo = ({ loading, error, position }) => {
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {error}</div>;

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
