import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Poi } from '../MyMap';

const PoiMarkers = (props: { pois: Poi[] }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin
            background={'#8398eb'}
            glyphColor={'#000'}
            borderColor={'#000'}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default PoiMarkers;
