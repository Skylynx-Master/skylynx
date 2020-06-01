import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "../assets/styles/components/SearchAddress.scss";

export default function SearchAddress() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div className="SearchAddress">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Buscar Dirección" })} />
            <div className="SearchAddress__coor">
              <p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lng}</p>
            </div>
            <div>
              {loading ? <div>...cargando</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#FDCB9E" : "#ffff",
                  cursor: "pointer",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
