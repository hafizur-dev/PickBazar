import React from "react";
import Chart from "../../Charts/Chart";
import { Box, BoxTitleWrapper, BoxContent } from "../../Box/Box";
import {
  ChartLabels,
  Img,
  Content,
  LabelText,
  SeriesText
} from "./DonutChart.style";

const BarChart = ({ series, icon, labels, prefix, colors }: any) => {
  const options = {
    options: {
      colors: colors,
      dataLabels: {
        enabled: false
      },
      labels: labels,
      legend: {
        show: false
      },
      stroke: {
        show: false
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.8
          }
        }
      },
      plotOptions: {
        pie: {
          donut: {},
          expandOnClick: false
        }
      }
    },
    series: series
  };

  const numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Box>
      <BoxTitleWrapper>
        <ChartLabels>
          <Img>{icon[0]}</Img>
          <Content>
            <SeriesText style={{ color: colors[0] }}>
              {prefix}
              {numberWithCommas(series[0])}
            </SeriesText>
            <LabelText>{labels[0]}</LabelText>
          </Content>
        </ChartLabels>
      </BoxTitleWrapper>

      <BoxContent style={{ display: "block" }}>
        <Chart
          options={options.options}
          series={options.series}
          // height="350"
          width="100%"
          type="donut"
        />
      </BoxContent>

      <BoxTitleWrapper>
        <ChartLabels style={{ flexDirection: "row-reverse" }}>
          <Img style={{ marginRight: "0", marginLeft: "15px" }}>{icon[1]}</Img>
          <Content style={{ alignItems: "flex-end" }}>
            <SeriesText style={{ color: colors[1] }}>
              {prefix}
              {numberWithCommas(series[1])}
            </SeriesText>
            <LabelText>{labels[1]}</LabelText>
          </Content>
        </ChartLabels>
      </BoxTitleWrapper>
    </Box>
  );
};

export default BarChart;
