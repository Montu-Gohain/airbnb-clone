import React, { useState } from 'react';

import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({});
 

// Transform the Search Result object into the {latitude : and longitude}

const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,

}));

// console.log(coordinates);

const center = getCenter(coordinates);
const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

// console.log(center);

  return (
   <ReactMapGL 
    mapStyle="mapbox://styles/mon2-dev/claahndd9000715lsv9y2w6of"
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMove={evt => setViewport(evt.setViewport)}
  >
    {searchResults.map((result) => (
        <div key={result.long}>
            <Marker
                longitude = {result.long} 
                latitude = {result.lat}
                offsetLeft = {-20}
                offSetTop = {-10}
                >
            </Marker>
            {selectedLocation.long === result.long ? (
                    <Popup 
                    onClose={()=> setSelectedLocation({})}
                     closeOnClick={true}
                     latitude={result.lat}
                     longitude={result.long}
                     >
                        {result.title}
                    </Popup>
            ): (
                false
            )}

        </div>
    ))}

  </ReactMapGL>
  );
};

export default Map;

/*
    Mapbox Access Token : pk.eyJ1IjoibW9uMi1kZXYiLCJhIjoiY2xhYWhpMXQ1MDJwaTNwc3prN3RqZDh4ZyJ9.2jX9aEz2wQYxGS6r9sRLbg

Style link: mapbox://styles/mon2-dev/claahndd9000715lsv9y2w6of



*/