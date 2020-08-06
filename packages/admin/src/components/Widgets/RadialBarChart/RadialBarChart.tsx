import React from "react";
import Chart from "../../Charts/Chart";
import { Box, BoxTitle, BoxTitleWrapper, BoxContent } from "../../Box/Box";
import {
  ChartLabels,
  Label,
  Color,
  Content,
  Title,
  Text
} from "./RadialBarChart.style";

const RadialBarChart = ({
  widgetTitle,
  series,
  colors,
  label,
  helperText
}: any) => {
  const options = {
    options: {
      colors: colors,
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "20%",
            background: "transparent"
          },

          track: {
            show: true,
            background: "#F2F3FC",
            strokeWidth: "100%",
            opacity: 1,
            margin: 15,
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5
            }
          },

          dataLabels: {
            show: false
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.8
          }
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: label
    },
    series: series
  };

  return (
    <Box>
      <BoxTitleWrapper>
        <BoxTitle title={widgetTitle} />
      </BoxTitleWrapper>

      <BoxContent style={{ display: "block" }}>
        <Chart
          options={options.options}
          series={options.series}
          type="radialBar"
          width="100%"
        />

        <ChartLabels>
          {label &&
            label.map((item, index) => (
              <Label key={index}>
                <Color style={{ backgroundColor: colors[index] }} />
                <Content>
                  <Title>{helperText[index]}</Title>
                  <Text>{label[index]}</Text>
                </Content>
              </Label>
            ))}
        </ChartLabels>
      </BoxContent>
    </Box>
  );
};

export default RadialBarChart;
