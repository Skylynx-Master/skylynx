import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import '../assets/styles/components/Map.scss';


function Mapping () {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 19.5636957, lng: -99.1928209 }} />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Mapping))

function Map() {
  return(
    <div className="Map">
      <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
      loadingElement={<div style={{ height: "0%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />} />

    </div>
  )
}

export default Map;