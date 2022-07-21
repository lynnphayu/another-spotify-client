import React from 'react';
import AudioFeatures from '../components/audioFeatures';

export default function PersonalAudioFeatures() {
  const d = [
    {
      Dance: 0.735,
      Energy: 0.578,
      //  key: 5 ,
      //  loudness: -11.84 ,
      //  mode: 0 ,
      Speech: 0.0461,
      Acoustic: 0.514,
      Instrumental: 0.0902,
      Live: 0.159,
      Valence: 0.624
    }
  ];
  return (
    <div>
      <AudioFeatures
        data={d}
        sideLegendFlag={true}
        options={{
          width: 200,
          height: 200,
          radius: 4,
          areaLineStroke: 2,
          axisLineStroke: 2
        }}
      />
    </div>
  );
}
