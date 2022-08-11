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

  return (
    <div>
      <div className="border-2 md:border-b-2 md:border-0 p-3 rounded-md flex flex-col">
        <Header>Short Term</Header>
        {shorttermAudioFeatures && (
          <div className="self-center">
            <AudioFeatures
              data={[
                {
                  Dance: shorttermAudioFeatures!.danceability,
                  Energy: shorttermAudioFeatures!.energy,
                  Speech: shorttermAudioFeatures!.speechiness,
                  Acoustic: shorttermAudioFeatures!.acousticness,
                  Instrumental: shorttermAudioFeatures!.instrumentalness,
                  Live: shorttermAudioFeatures!.liveness,
                  Valence: shorttermAudioFeatures!.valence
                }
              ]}
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
      <div className="border-2 md:border-b-2 md:border-0 p-4 rounded-md flex flex-col">
        <Header>Medium Term</Header>
        {mediumtermAudioFeatures && (
          <div className="self-center">
            <AudioFeatures
              type="mediumterm"
              data={[
                {
                  Dance: mediumtermAudioFeatures!.danceability,
                  Energy: mediumtermAudioFeatures!.energy,
                  Speech: mediumtermAudioFeatures!.speechiness,
                  Acoustic: mediumtermAudioFeatures!.acousticness,
                  Instrumental: mediumtermAudioFeatures!.instrumentalness,
                  Live: mediumtermAudioFeatures!.liveness,
                  Valence: mediumtermAudioFeatures!.valence
                }
              ]}
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
      <div className="border-2 md:border-b-2 md:border-0 p-4 rounded-md flex flex-col">
        <Header>Long Term</Header>
        {longtermAudioFeatures && (
          <div className="self-center">
            <AudioFeatures
              data={[
                {
                  Dance: longtermAudioFeatures!.danceability,
                  Energy: longtermAudioFeatures!.energy,
                  Speech: longtermAudioFeatures!.speechiness,
                  Acoustic: longtermAudioFeatures!.acousticness,
                  Instrumental: longtermAudioFeatures!.instrumentalness,
                  Live: longtermAudioFeatures!.liveness,
                  Valence: longtermAudioFeatures!.valence
                }
              ]}
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
