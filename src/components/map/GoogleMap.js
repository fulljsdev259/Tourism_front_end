import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.info}
  >
    {/* {props.isMarkerShown && */}
         <Marker position={{ lat: -28.5638968, lng: 77.1176126 }} />
         {/* } */}
  </GoogleMap>
))

export default MapComponent;