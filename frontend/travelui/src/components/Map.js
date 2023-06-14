import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const defaultProps = {
  center: {
    lat: 43.073051,
    lng: -89.40123,
  },
  zoom: 15,
};

export default function Map(props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GCP_MAP_JS_KEY,
  });

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  const containerStyle = {
    width: "55vw",
    height: "55vh",
  };

  return (
    <div>
      <GoogleMap
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        mapContainerStyle={containerStyle}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        {props.data.unassigned.map((p) => (
          <Marker
            position={{ lat: p.Latitude, lng: p.Longitude }}
            title={p.Name}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
