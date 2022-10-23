import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import cl from "./MapComponent.module.scss";

export const MapComponent = ({ apiKey, position }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map position={position} />;
};

function Map({ position }) {
  return (
    <div className={cl.container}>
      <GoogleMap zoom={3} center={position} mapContainerClassName={cl.map}>
        <Marker position={position} />
      </GoogleMap>
    </div>
  );
}
