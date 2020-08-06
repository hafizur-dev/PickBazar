import React from 'react';
import Chart from '../../Charts/Chart';
import { Box, BoxTitle, BoxTitleWrapper, BoxContent } from '../../Box/Box';
import {
  ContentWrapper,
  Content,
  LabelText,
  SeriesText,
} from './ColumnChart.style';
import { ArrowUp } from '../../../assets/icons/ArrowUp';
import { ArrowDown } from '../../../assets/icons/ArrowDown';

const BarChart = ({
  widgetTitle,
  series,
  colors,
  prefix,
  totalValue,
  text,
  position,
  percentage,
  categories,
}: any) => {
  const options = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '65%',
          endingShape: 'flat',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 2,
      },
      // responsive: [
      //   {
      //     breakpoint: 720,
      //     options: {
      //       plotOptions: {
      //         bar: {
      //           horizontal: true
      //         }
      //       }
      //     }
      //   }
      // ],
      grid: {
        borderColor: '#F7F7F7',
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      colors: colors,
      xaxis: {
        labels: {
          show: true,
          style: {
            colors: '#161F6A',
            fontSize: '14px',
            fontFamily: "'Lato', sans-serif",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: categories,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            color: '#161F6A',
            fontSize: '14px',
            fontFamily: "'Lato', sans-serif",
          },
        },
      },
    },
    series: [
      {
        name: 'Sale',
        data: series,
      },
    ],
  };

  return (
    <Box>
      <BoxTitleWrapper>
        <ContentWrapper>
          <BoxTitle title={widgetTitle} />
          <Content>
            <SeriesText>
              {prefix}
              {totalValue}
            </SeriesText>
            <LabelText>
              {position === 'up' ? (
                <span style={{ color: '#00C58D' }}>
                  <ArrowUp />
                </span>
              ) : position === 'down' ? (
                <span style={{ color: '#fc4a71' }}>
                  {' '}
                  <ArrowDown />
                </span>
              ) : (
                ''
              )}
              <span style={{ marginLeft: 5 }}>
                <span style={{ color: '#00C58D' }}>{percentage}</span>
                &nbsp;
                {text}
              </span>
            </LabelText>
          </Content>
        </ContentWrapper>
      </BoxTitleWrapper>

      <BoxContent style={{ display: 'block' }}>
        <Chart
          options={options.options}
          series={options.series}
          height='350'
          width='100%'
          type='bar'
        />
      </BoxContent>
    </Box>
  );
};

export default BarChart;
