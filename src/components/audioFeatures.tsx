import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type CFG = {
  radius: number;
  w: number;
  h: number;
  factor: number;
  factorLegend: number;
  levels: number;
  maxValue: number;
  radians: number;
  opacityArea: number;
  ToRight: number;
  TranslateX: number;
  TranslateY: number;
  ExtraWidthX: number;
  ExtraWidthY: number;
  areaLineStroke: number;
  axisLineStroke: number;
  color: readonly string[];
  areaBetween: boolean;
};
export default function AudioFeatures({
  data,
  type,
  sideLegendFlag = true,
  options: { w, h, areaLineStroke, axisLineStroke, radius, areaBetween } = {}
}: {
  type: string;
  data?: Record<string, number>[];
  sideLegendFlag?: boolean;
  options?: Partial<CFG>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  var RadarChart = {
    draw: function (
      id: HTMLDivElement | null,
      d: Record<string, string | number>[][],
      options: Record<string, unknown>
    ) {
      var cfg: CFG = {
        radius: 5,
        w: 600,
        h: 600,
        factor: 1,
        factorLegend: 0.85,
        levels: 3,
        maxValue: 0,
        radians: 2 * Math.PI,
        opacityArea: 0.5,
        ToRight: 5,
        TranslateX: 80,
        TranslateY: 30,
        ExtraWidthX: 50,
        ExtraWidthY: 100,
        areaLineStroke: 3,
        axisLineStroke: 3,
        color: d3.schemeCategory10,
        areaBetween: false
      };

      if ('undefined' !== typeof options) {
        for (var i in options) {
          if ('undefined' !== typeof options[i]) {
            (cfg as Record<string, unknown>)[i] = options[i];
          }
        }
      }

      cfg.maxValue = Math.max(
        cfg.maxValue as number,
        d3.max(d, (i) =>
          d3.max(
            i.map(function (o) {
              return o.value as number;
            })
          )
        ) as number
      );
      var allAxis = d[0].map(function (i, j) {
        return i.axis;
      });
      var total = allAxis.length;
      var radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);
      // var Format = d3.format('%');
      d3.select(id).select('svg').remove();

      var g = d3
        .select(id)
        .append('svg')
        .attr('class', `graph${type}`)
        .attr('width', cfg.w + cfg.ExtraWidthX)
        .attr('height', cfg.h + cfg.ExtraWidthY)
        .append('g')
        .attr('transform', 'translate(' + cfg.TranslateX + ',' + cfg.TranslateY + ')');
      var tooltip: d3.Selection<SVGTextElement, unknown, HTMLElement, any>;

      //Circular segments
      for (var j = 0; j < cfg.levels - 1; j++) {
        const levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
        g.selectAll('.levels')
          .data(allAxis)
          .enter()
          .append('svg:line')
          .attr(
            'x1',
            (d, i) => levelFactor * (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
          )
          .attr(
            'y1',
            (d, i) => levelFactor * (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
          )
          .attr(
            'x2',
            (d, i) => levelFactor * (1 - cfg.factor * Math.sin(((i + 1) * cfg.radians) / total))
          )
          .attr(
            'y2',
            (d, i) => levelFactor * (1 - cfg.factor * Math.cos(((i + 1) * cfg.radians) / total))
          )
          .attr('class', 'line')
          .style('stroke', 'grey')
          .style('stroke-opacity', '0.75')
          .style('stroke-width', '0.3px')
          .attr(
            'transform',
            'translate(' + (cfg.w / 2 - levelFactor) + ', ' + (cfg.h / 2 - levelFactor) + ')'
          );
      }

      // //Text indicating at what % each level is
      // for (var j = 0; j < cfg.levels; j++) {
      //   var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
      //   g.selectAll(".levels")
      //     .data([1]) //dummy data
      //     .enter()
      //     .append("svg:text")
      //     .attr("x", function (d) { return levelFactor * (1 - cfg.factor * Math.sin(0)); })
      //     .attr("y", function (d) { return levelFactor * (1 - cfg.factor * Math.cos(0)); })
      //     .attr("class", "legend")
      //     .style("font-family", "sans-serif")
      //     .style("font-size", "10px")
      //     .attr("transform", "translate(" + (cfg.w / 2 - levelFactor + cfg.ToRight) + ", " + (cfg.h / 2 - levelFactor) + ")")
      //     .attr("fill", "#737373")
      //     .text(Format((j + 1) * cfg.maxValue / cfg.levels));
      // }

      let series = 0;

      var axis = g.selectAll('.axis').data(allAxis).enter().append('g').attr('class', 'axis');
      axis
        .append('line')
        .attr('x1', cfg.w / 2)
        .attr('y1', cfg.h / 2)
        .attr('x2', function (d, i) {
          return (cfg.w / 2) * (1 - cfg.factor * Math.sin((i * cfg.radians) / total));
        })
        .attr('y2', function (d, i) {
          return (cfg.h / 2) * (1 - cfg.factor * Math.cos((i * cfg.radians) / total));
        })
        .attr('class', 'line')
        .style('stroke', (d, i) => cfg.color[i])
        .style('stroke-width', `${axisLineStroke}px`);

      // axis.append("text")
      //   .attr("class", "legend")
      //   .text(function (d) { return d })
      //   .style("font-family", "sans-serif")
      //   .style("font-size", "11px")
      //   .attr("text-anchor", "middle")
      //   .attr("dy", "1.5em")
      //   // .attr("transform", function (d, i) { return "translate(0, -10)" })
      //   // .attr("transform", function (d, i) { return "translate(0,-10)rotate(-45)" })
      //   .attr("x", (d, i) => cfg.w / 2 * (1 - cfg.factorLegend * Math.sin(i * cfg.radians / total)) - 30 * Math.sin(i * cfg.radians / total))
      //   .attr("y", (d, i) => cfg.h / 2 * (1 - Math.cos(i * cfg.radians / total)) - 15 * Math.cos(i * cfg.radians / total));

      const unionArea: number[][] = [];
      var constDv: number[][] = [];
      d.forEach(function (y, x) {
        const dataValues: number[][] = [];
        g.selectAll('.nodes').data(y, (k, i) => {
          const j = k as { value: number };
          dataValues.push([
            (cfg.w / 2) *
              (1 -
                (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                  cfg.factor *
                  Math.sin((i * cfg.radians) / total)),
            (cfg.h / 2) *
              (1 -
                (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                  cfg.factor *
                  Math.cos((i * cfg.radians) / total))
          ]);
          unionArea.push([
            (cfg.w / 2) *
              (1 -
                (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                  cfg.factor *
                  Math.sin((i * cfg.radians) / total)),
            (cfg.h / 2) *
              (1 -
                (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                  cfg.factor *
                  Math.cos((i * cfg.radians) / total))
          ]);
          if (i === y.length - 1) {
            unionArea.push(unionArea[x > 0 ? d[0].length + 1 : 0]);
            dataValues.push(dataValues[0]);
          }
          return 'OHSH**T';
        });
        constDv = constDv.concat(dataValues);

        if (areaBetween) return;
        g.selectAll('.area')
          .data([dataValues])
          .enter()
          .append('polygon')
          .attr('class', 'radar-chart-serie' + series)
          .style('stroke-width', `${cfg.areaLineStroke}px`)
          // .style("stroke", cfg.color[0])
          .style('stroke', '#23B883')

          .attr('points', function (d) {
            var str = '';
            for (var pti = 0; pti < d.length; pti++) {
              str = str + d[pti][0] + ',' + d[pti][1] + ' ';
            }
            return str;
          })
          // .style("fill", function (j, i) { return cfg.color[0] })
          .style('fill', '#23B883')
          .style('fill-opacity', cfg.opacityArea)
          .on('mouseover', function (d) {
            let z = 'polygon.' + d3.select(this).attr('class');
            g.selectAll('polygon').transition().style('fill-opacity', 0.1);
            g.selectAll(z).transition().style('fill-opacity', 0.7);
          })
          .on('mouseout', function () {
            g.selectAll('polygon').transition().style('fill-opacity', cfg.opacityArea);
          });
        series++;
      });
      series = 0;

      g.selectAll('.area')
        .data([areaBetween ? unionArea : constDv])
        .enter()
        .append('polygon')
        .attr('class', 'radar-chart-serie' + series)
        .style('stroke-width', `${cfg.areaLineStroke}px`)
        // .style("stroke", cfg.color[0])
        .style('stroke', '#23B883')

        .attr(
          'points',
          !areaBetween
            ? function (d) {
                var str = '';
                for (var pti = 0; pti < d.length; pti++) {
                  str = str + d[pti][0] + ',' + d[pti][1] + ' ';
                }
                return str;
              }
            : function (d) {
                var str = `${cfg.w / 2},${cfg.h / 2} `;
                str = str + d[0][0] + ',' + d[0][1] + ' ';
                str = str + d[8][0] + ',' + d[8][1] + ' ';
                str = str + d[9][0] + ',' + d[9][1] + ' ';
                str = str + d[1][0] + ',' + d[1][1] + ' ';
                str = str + d[0][0] + ',' + d[0][1] + ' ';

                str = str + d[6][0] + ',' + d[6][1] + ' ';
                str = str + d[0][0] + ',' + d[0][1] + ' ';
                str = str + d[8][0] + ',' + d[8][1] + ' ';
                str = str + d[14][0] + ',' + d[14][1] + ' ';
                str = str + d[6][0] + ',' + d[6][1] + ' ';

                str = str + d[6][0] + ',' + d[6][1] + ' ';
                str = str + d[5][0] + ',' + d[5][1] + ' ';
                str = str + d[13][0] + ',' + d[13][1] + ' ';
                str = str + d[14][0] + ',' + d[14][1] + ' ';
                str = str + d[6][0] + ',' + d[6][1] + ' ';

                str = str + d[5][0] + ',' + d[5][1] + ' ';
                str = str + d[4][0] + ',' + d[4][1] + ' ';
                str = str + d[12][0] + ',' + d[12][1] + ' ';
                str = str + d[13][0] + ',' + d[13][1] + ' ';
                str = str + d[5][0] + ',' + d[5][1] + ' ';

                str = str + d[4][0] + ',' + d[4][1] + ' ';
                str = str + d[3][0] + ',' + d[3][1] + ' ';
                str = str + d[11][0] + ',' + d[11][1] + ' ';
                str = str + d[12][0] + ',' + d[12][1] + ' ';
                str = str + d[4][0] + ',' + d[4][1] + ' ';

                str = str + d[3][0] + ',' + d[3][1] + ' ';
                str = str + d[2][0] + ',' + d[2][1] + ' ';
                str = str + d[10][0] + ',' + d[10][1] + ' ';
                str = str + d[11][0] + ',' + d[11][1] + ' ';
                str = str + d[3][0] + ',' + d[3][1] + ' ';

                str = str + d[2][0] + ',' + d[2][1] + ' ';
                str = str + d[10][0] + ',' + d[10][1] + ' ';
                str = str + d[9][0] + ',' + d[9][1] + ' ';
                str = str + d[1][0] + ',' + d[1][1] + ' ';
                str = str + d[2][0] + ',' + d[2][1] + ' ';
                str = str + d[3][0] + ',' + d[3][1] + ' ';
                str = str + d[4][0] + ',' + d[4][1] + ' ';
                str = str + d[5][0] + ',' + d[5][1] + ' ';
                str = str + d[6][0] + ',' + d[6][1] + ' ';
                str = str + d[0][0] + ',' + d[0][1] + ' ';
                return str;
                // + `${cfg.w / 2},${cfg.h / 2}`;
              }
        )
        // .style("fill", function (j, i) { return cfg.color[0] })
        .style('fill', '#23B883')
        .style('fill-opacity', cfg.opacityArea)
        .on('mouseover', function (d) {
          let z = 'polygon.' + d3.select(this).attr('class');
          g.selectAll('polygon').transition().style('fill-opacity', 0.1);
          g.selectAll(z).transition().style('fill-opacity', 0.7);
        })
        .on('mouseout', function () {
          g.selectAll('polygon').transition().style('fill-opacity', cfg.opacityArea);
        });

      d.forEach(function (y, x) {
        g.selectAll('.nodes')
          .data(y)
          .enter()
          .append('svg:circle')
          .attr('class', 'radar-chart-serie' + series)
          .attr('r', cfg.radius)
          .attr('alt', (k) => {
            const j = k as { value: number };
            return Math.max(Math.max(j.value, 0), 0);
          })
          .attr('cx', (k, i) => {
            const j = k as { value: number };
            var dv = [];
            dv.push([
              (cfg.w / 2) *
                (1 -
                  (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                    cfg.factor *
                    Math.sin((i * cfg.radians) / total)),
              (cfg.h / 2) *
                (1 -
                  (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                    cfg.factor *
                    Math.cos((i * cfg.radians) / total))
            ]);
            return (
              (cfg.w / 2) *
              (1 -
                (Math.max(j.value, 0) / cfg.maxValue) *
                  cfg.factor *
                  Math.sin((i * cfg.radians) / total))
            );
          })
          .attr('cy', function (k, i) {
            const j = k as { value: number };
            return (
              (cfg.h / 2) *
              (1 -
                (Math.max(j.value, 0) / cfg.maxValue) *
                  cfg.factor *
                  Math.cos((i * cfg.radians) / total))
            );
          })
          .attr('data-id', function (j) {
            return j.axis;
          })
          .style('fill', cfg.color[series])
          .style('fill-opacity', 0.9)
          .style('fill', '#23B883')
          .style('fill-opacity', 0.9)
          .on('mouseover', function (e, d) {
            let newX = parseFloat(d3.select(this).attr('cx')) - 10;
            let newY = parseFloat(d3.select(this).attr('cy')) - 5;

            tooltip
              .attr('x', newX)
              .attr('y', newY)
              // .text(Format(d.value))
              .transition()
              .style('opacity', 1);

            let z = 'polygon.' + d3.select(this).attr('class');
            g.selectAll('polygon').transition().style('fill-opacity', 0.1);
            g.selectAll(z).transition().style('fill-opacity', 0.7);
          })
          .on('mouseout', function () {
            tooltip.transition().style('opacity', 0);
            g.selectAll('polygon').transition().style('fill-opacity', cfg.opacityArea);
          })
          .append('svg:title')
          .text(function (k) {
            const j = k as { value: number };
            return Math.max(j.value, 0);
          });

        series++;
      });
      //Tooltip
      tooltip = g
        .append('text')
        .style('opacity', 0)
        .style('font-family', 'sans-serif')
        .style('font-size', '13px') as unknown as d3.Selection<
        SVGTextElement,
        unknown,
        HTMLElement,
        any
      >;
    },
    putLegends: function (id: any, d: Record<string, unknown>[][], cfg: { w: number }) {
      const LegendLabels = d[0].reduce(
        (acc: string | any[], { axis, value }: any) =>
          acc.concat(axis).concat((value * 10).toFixed(1)),
        []
      );
      // var svg = d3.select(id)
      //   .selectAll('svg')
      //   .append('svg')
      //   .attr("width", 120)
      //   .attr("height", 150)

      //Initiate Legend
      var legend = d3
        .select(`.graph${type}`)
        .append('g')
        .attr('class', 'legend')
        .attr('height', 100)
        .attr('width', 150)
        .attr('transform', `translate(${cfg.w + 10}, 20)`);
      //Create colour squares
      legend
        .selectAll('circle')
        .data(d[0].map(({ axis }) => axis))
        .enter()
        .append('circle')
        .attr('class', 'circle')
        .attr('r', 5)
        .attr('cx', 5)
        .attr('transform', 'translate(0,-4)')
        .attr('cy', function (d, i) {
          return i * 24;
        })
        .attr('width', 10)
        .attr('height', 10)
        .style('fill', function (d, i) {
          return d3.schemeCategory10[i];
        });

      //Create text next to squares
      legend
        .selectAll('text')
        .data(LegendLabels)
        .enter()
        .append('text')
        .attr('x', function (d, i) {
          if (i % 2 !== 0) return 15;
          else return 45;
        })
        .attr('y', function (d, i) {
          if (i % 2 !== 0) return i * 12 - 12;
          else return i * 12;
        })
        .attr('font-size', '13px')
        .attr('font-weight', function (d, i) {
          if (i % 2 !== 0) return 'bold';
          else return 'normal';
        })
        .attr('fill', 'black')
        .text(function (d, i) {
          if (i % 2 !== 0) return d;
          else return d;
        });
    }
  };

  useEffect(() => {
    //Data
    var d: Record<string, string | number>[][] = [];
    if (!data) {
      d.push([
        { axis: 'Dance', value: 0.735 },
        { axis: 'Energy', value: 0.578 },
        // { axis: "key", value: 5 },
        // { axis: "loudness", value: -11.84 },
        // { axis: "mode", value: 0 },
        { axis: 'Speech', value: 0.0461 },
        { axis: 'Acoustic', value: 0.514 },
        { axis: 'Instrumental', value: 0.0902 },
        { axis: 'Live', value: 0.159 },
        { axis: 'Valence', value: 0.624 }
        // { axis: "tempo", value: 98.002 },
        // { axis: "time_signature", value: 4 }
      ]);
    } else if (!sideLegendFlag) {
      d = d.concat(
        data.map((entry) => Object.entries(entry).map(([k, v]) => ({ axis: k, value: v / 100 })))
      );
    } else {
      d = d.concat(
        data.map((entry) => Object.entries(entry).map(([k, v]) => ({ axis: k, value: v })))
      );
    }

    //Options for the Radar chart, other than default
    var mycfg = {
      w: w || 360,
      h: h || 360,
      maxValue: 1,
      levels: 5,
      TranslateX: 0,
      TranslateY: 0,
      ExtraWidthX: sideLegendFlag ? 150 : 0,
      ExtraWidthY: 0,
      areaLineStroke,
      axisLineStroke,
      radius: radius,
      areaBetween
    };

    //Call function to draw the Radar chart
    //Will expect that data is in %'s
    RadarChart.draw(ref.current, d, mycfg);
    sideLegendFlag && RadarChart.putLegends(ref.current, d, mycfg);
  });
  return <div className="max-w-min" ref={ref}></div>;
}
