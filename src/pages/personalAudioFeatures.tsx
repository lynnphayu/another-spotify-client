import { useAtom } from 'jotai';
import React from 'react';
import AudioFeatures from '../components/audioFeatures';
import Header from '../components/header';
import type { AudioFeatures as AudioFeatuesT } from '../types';
import { useCSWR } from '../utils/client';
import { tokenAtom } from '../App';

type OnlyNumbers<T> = {
  [P in keyof T]: P extends number ? T[P] : never;
};

export default function PersonalAudioFeatures() {
  const [token] = useAtom(tokenAtom);

  const { data: shorttermAudioFeatures } = useCSWR<AudioFeatuesT>(
    `/audio_features?timespan=short_term`,
    token
  );

  const { data: mediumtermAudioFeatures } = useCSWR<AudioFeatuesT>(
    `/audio_features?timespan=medium_term`,
    token
  );

  const { data: longtermAudioFeatures } = useCSWR<AudioFeatuesT>(
    `/audio_features?timespan=long_term`,
    token
  );

  const s = {
    Dance: shorttermAudioFeatures!.danceability,
    Energy: shorttermAudioFeatures!.energy,
    Speech: shorttermAudioFeatures!.speechiness,
    Acoustic: shorttermAudioFeatures!.acousticness,
    Instrumental: shorttermAudioFeatures!.instrumentalness,
    Live: shorttermAudioFeatures!.liveness,
    Valence: shorttermAudioFeatures!.valence
  };
  const m = {
    Dance: mediumtermAudioFeatures!.danceability,
    Energy: mediumtermAudioFeatures!.energy,
    Speech: mediumtermAudioFeatures!.speechiness,
    Acoustic: mediumtermAudioFeatures!.acousticness,
    Instrumental: mediumtermAudioFeatures!.instrumentalness,
    Live: mediumtermAudioFeatures!.liveness,
    Valence: mediumtermAudioFeatures!.valence
  };
  const l = {
    Dance: longtermAudioFeatures!.danceability,
    Energy: longtermAudioFeatures!.energy,
    Speech: longtermAudioFeatures!.speechiness,
    Acoustic: longtermAudioFeatures!.acousticness,
    Instrumental: longtermAudioFeatures!.instrumentalness,
    Live: longtermAudioFeatures!.liveness,
    Valence: longtermAudioFeatures!.valence
  };

  return (
    <div className="w-full md:px-10">
      <div className="border-2 p-4 md:m-3 my-2 rounded-md flex flex-col">
        <Header>Short Term</Header>
        {shorttermAudioFeatures && (
          <div className="w-min self-center">
            <AudioFeatures
              data={[s]}
              type="shortterm"
              sideLegendFlag={true}
              options={{
                w: 200,
                h: 200,
                radius: 4,
                areaLineStroke: 2,
                axisLineStroke: 2
              }}
            />
          </div>
        )}
      </div>
      <div className="border-2 p-4 md:m-3 my-2 rounded-md flex flex-col">
        <Header>Medium Term</Header>
        {mediumtermAudioFeatures && (
          <div className="w-min self-center">
            <AudioFeatures
              type="mediumterm"
              data={[m]}
              sideLegendFlag={true}
              options={{
                w: 200,
                h: 200,
                radius: 4,
                areaLineStroke: 2,
                axisLineStroke: 2
              }}
            />
          </div>
        )}
      </div>
      <div className="border-2 p-4 md:m-3 my-2 rounded-md flex flex-col">
        <Header>Long Term</Header>
        {longtermAudioFeatures && (
          <div className="w-min self-center">
            <AudioFeatures
              data={[l]}
              type="longterm"
              sideLegendFlag={true}
              options={{
                w: 200,
                h: 200,
                radius: 4,
                areaLineStroke: 2,
                axisLineStroke: 2
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
