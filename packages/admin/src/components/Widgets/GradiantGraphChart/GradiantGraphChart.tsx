import React from "react";
import Chart from "../../Charts/Chart";
import { Box, BoxTitleWrapper, BoxContent } from "../../Box/Box";
import { Content, LabelText, SeriesText } from "./GradiantGraphChart.style";
import ProgressBar from "../../ProgressBar/ProgressBar";

const GradiantGraphChart = ({
  series,
  topRowTitle,
  bottomRowData,
  labels,
  colors
}: any) => {
  const options = {
    options: {
      chart: {
        toolbar: {
          show: false
        }
      },
      colors: colors,
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 1,
          opacityTo: 0.7
        }
      },
      stroke: {
        show: true,
        width: 2,
        curve: "smooth",
        colors: colors
      },
      legend: {
        show: true
      },
      xaxis: {
        show: false,
        type: "datetime",
        categories: labels,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      },
      markers: {
        size: 0,
        opacity: 1,
        colors: ["#18D8BC"],
        strokeColor: "#fff",
        strokeWidth: 4,
        hover: {
          size: 8
        }
      }
    },
    series: [
      {
        name: "",
        data: series
      }
    ]
  };

  return (
    <Box>
      <BoxTitleWrapper>
        <Content style={{ marginLeft: "auto" }}>
          <LabelText>{topRowTitle}</LabelText>
          <SeriesText style={{ color: colors[0] }}>
            {bottomRowData[0].value - bottomRowData[1].value}%
          </SeriesText>
        </Content>
      </BoxTitleWrapper>

      <BoxContent style={{ display: "block" }}>
        <Chart
          options={options.options}
          series={options.series}
          width="100%"
          type="area"
        />
      </BoxContent>

      <BoxTitleWrapper
        style={{ justifyContent: "space-between", paddingTop: "0" }}
      >
        {bottomRowData &&
          bottomRowData.map((item, index) => (
            <Content key={index}>
              <LabelText>{item.label}</LabelText>
              <SeriesText>{item.valueText}</SeriesText>
              <ProgressBar
                value={item.value}
                successValue={100}
                overrides={{
                  Bar: {
                    style: () => {
                      return {
                        backgroundColor: "#F2F2F2",
                        marginLeft: "0px",
                        marginRight: "0px"
                      };
                    }
                  },
                  BarProgress: {
                    style: () => {
                      return {
                        backgroundColor: item.color
                      };
                    }
                  }
                }}
              />
            </Content>
          ))}
      </BoxTitleWrapper>
    </Box>
  );
};

export default GradiantGraphChart;
