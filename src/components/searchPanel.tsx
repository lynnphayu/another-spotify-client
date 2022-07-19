import React, { useState } from "react";
import * as d3 from "d3";
import AudioFeatures from "./audioFeatures";

export default function SearchPanel() {
  const [feature, setFeatures] = useState<
    Record<string, { value: number; disabled: boolean }>
  >({
    dance: { value: 50, disabled: false },
    energy: { value: 50, disabled: false },
    speech: { value: 50, disabled: false },
    live: { value: 50, disabled: false },
    instrumental: { value: 50, disabled: false },
    valence: { value: 50, disabled: false },
    accoustic: { value: 50, disabled: false },
  });

  const [tolerant, setTolerant] = useState(10);

  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="flex flex-wrap justify-center">
        {/* transform -rotate-90 -translate-x-3 */}
        {/* w-1/2 gap-0.5 */}
        <div className="grid w-full p-3">
          <div className="flex flex-wrap items-center justify-between">
            <label
              className="flex flex-wrap justify-between pt-2 w-full"
              htmlFor="tempo"
            >
              <p className="text-xs text-gray-500">Tempo</p>
              {/* <p className="text-xs text-gray-500">{tolerant}</p> */}
            </label>
            {/* <input name="tempo" type="number" min="1" max="9" step="1" className="w-full ring-none border-2 rounded-md" /> */}

            <select className="w-full z-0 bg-right bg-no-repeat bg-caret-down bg-auto appearance-none outlier-none w-full ring-none border-2 bg-white rounded-md p-2">
              {[...Array(200).keys()].map((k) => (
                <option>{k}</option>
              ))}
            </select>
          </div>
          <div className="w-full grid grid-cols-2 gap-2 my-2">
            <button className="flex-grow p-2 border-2 rounded-md">Major</button>
            <button className="flex-grow p-2 border-2 rounded-md">Minor</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-grow-0 flex-none border-2 rounded-md h-auto">
          <AudioFeatures
            data={[feature].reduce((acc: Record<string, unknown>[], val) => {
              const lowerBound = Object.entries(val).reduce(
                (accu: Record<string, number>, [k, { value: v, disabled }]) => {
                  const lower = v - tolerant;
                  return !disabled
                    ? {
                        ...accu,
                        [`${k}`]: lower < 0 ? 0 : lower,
                      }
                    : accu;
                },
                {}
              );
              const upperBound = Object.entries(val).reduce(
                (accu, [k, { value: v, disabled }]) => {
                  const upper = v + tolerant;
                  return !disabled
                    ? {
                        ...accu,
                        [`${k}`]: upper > 100 ? 100 : upper,
                      }
                    : accu;
                },
                {}
              );
              return acc.concat(lowerBound).concat(upperBound);
            }, [])}
            sideLegendFlag={false}
            options={{
              width: 120,
              height: 120,
              radius: 2,
              areaLineStroke: 1,
              axisLineStroke: 1,
              areaBetween: true,
            }}
          />
        </div>
      </div>
      {Object.entries(feature).map(([k, { value: v, disabled }], i) => (
        <div
          className="flex flex-wrap items-center justify-between col-span-2 mx-6"
          key={k}
        >
          {/* <div className="bg-white border-2 rounded-md border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
            <input type="checkbox" className="opacity-0 absolute" value={!disabled} onChange={(e) => setFeatures({
              ...feature, [`${k}`]: {
                ...feature[`${k}`], disabled: e.target.value
              }
            })} />
            <svg className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
          </div> */}
          {/* <div className="flex-1"> */}
          <label
            className="flex flex-wrap justify-between pt-3 w-full"
            htmlFor="energy"
          >
            <p className="text-xs text-gray-500">
              {k[0].toUpperCase().concat(k.slice(1, k.length))}
            </p>
            <p className="text-xs text-gray-500">{v}</p>
          </label>
          <input
            name="energy"
            className="appearance-none h-0.5 rounded outline-none slider-thumb w-full"
            style={{ backgroundColor: d3.schemeCategory10[i] }}
            onChange={(e) =>
              setFeatures({
                ...feature,
                [`${k}`]: {
                  ...feature[`${k}`],
                  value: parseInt(e.target.value),
                },
              })
            }
            value={v}
            type="range"
            min="0"
            max="100"
          />
          {/* </div> */}
        </div>
      ))}
      <div className="flex flex-wrap items-center justify-between col-span-2 mx-6">
        <label
          className="flex flex-wrap justify-between pt-2 w-full"
          htmlFor="energy"
        >
          <p className="text-xs text-gray-500">Tolerant</p>
          <p className="text-xs text-gray-500">{tolerant}</p>
        </label>
        <input
          name="energy"
          className="appearance-none w-full h-0.5 rounded outline-none slider-thumb"
          style={{ backgroundColor: "gray" }}
          onChange={(e) => setTolerant(parseInt(e.target.value))}
          value={tolerant}
          type="range"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
}
