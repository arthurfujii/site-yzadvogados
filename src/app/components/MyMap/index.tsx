'use client';
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';
import PoiMarkers from '../PoiMarkers';

export type Poi = { key: string; location: google.maps.LatLngLiteral };
const locations: Poi[] = [
  {
    key: 'yzadvogados',
    location: { lat: -23.574311293745126, lng: -46.689419138203505 },
  },
];

export default function MyMap() {
  return (
    <APIProvider
      apiKey='AIzaSyDifkeflmS2b5Ael54a97fnUsufODAKluE'
      onLoad={() => console.log('Maps API has loaded')}
    >
      <Map
        streetViewControl={false}
        fullscreenControl={false}
        mapTypeControl={false}
        controlSize={25}
        defaultCenter={{
          lat: -23.574311293745126,
          lng: -46.689419138203505,
        }}
        defaultZoom={16}
        mapId={'9f75273d3c4fcca5cf64c64e'}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log(
            'camera changed:',
            ev.detail.center,
            'zoom:',
            ev.detail.zoom,
          )
        }
      >
        <PoiMarkers pois={locations} />
      </Map>
    </APIProvider>
  );
}
