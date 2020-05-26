import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import "../assets/styles/components/Map.scss";
import * as propertySimulation from "./data/propertySimulation.json";

function Mapping() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 19.5636957, lng: -99.1928209 }}
    >
      {propertySimulation.features.map((property) => (
        <Marker
          key={property.properties.PARK_ID}
          position={{
            lat: property.geometry.coordinates[1],
            lng: property.geometry.coordinates[0],
          }}
          onClick={() => {
            setSelectedProperty(property);
          }}
          />
      ))}

          {selectedProperty && (
            <InfoWindow
            position={{
              lat: selectedProperty.geometry.coordinates[1],
              lng: selectedProperty.geometry.coordinates[0],
            }}
            >
              <div>Informacion del inmueble</div>
            </InfoWindow>
          )}
        
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Mapping));

function Map() {
  return (
    <div className="Map">
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDoz2SHkwEIzGjGC61i6YNwY3W036WFFsg&callback=initMap"
        }
        loadingElement={<div style={{ height: "0%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

export default Map;
