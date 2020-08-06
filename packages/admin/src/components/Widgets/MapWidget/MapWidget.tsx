import React from "react";
import { Box } from "../../Box/Box";

import {
  TopPart,
  Progressbox,
  ProgressSingle,
  ProgressTitle,
  MapLengendTitle,
  MapLengendValue,
  ProgressBarTitleWrapper,
  ProgressNumber,
  TotalValueBox,
  BottomPart,
  MapLengendBox,
  MapLengendBoxSingle,
  MapLengendColor
} from "./MapWidget.style";
import ProgressBar from "../../ProgressBar/ProgressBar";

const MapWidget = ({ data, totalText }: any) => {
  const numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const numberToPercent = (num, total) => {
    return (num * 100) / total;
  };

  return (
    <Box>
      <TopPart>
        <TotalValueBox>
          <MapLengendTitle>{totalText}</MapLengendTitle>
          <MapLengendValue>
            {numberWithCommas(data.reduce((a, { value }) => a + value, 0))}
          </MapLengendValue>
        </TotalValueBox>

        <Progressbox>
          {data.map((item, index) => (
            <ProgressSingle key={index}>
              <ProgressBarTitleWrapper>
                <ProgressTitle>{item.name}</ProgressTitle>
                <ProgressNumber>
                  ({numberWithCommas(item.value)})
                </ProgressNumber>
              </ProgressBarTitleWrapper>
              <ProgressBar
                value={numberToPercent(
                  item.value,
                  data.reduce((a, { value }) => a + value, 0)
                )}
                successValue={100}
                overrides={{
                  Bar: {
                    style: () => {
                      return {
                        backgroundColor: "#F2F2F2",
                        marginLeft: "0px",
                        marginRight: "0px",
                        height: "10px",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                        position: "relative"
                      };
                    }
                  },
                  BarProgress: {
                    style: ({ $theme, $value }) => {
                      return {
                        backgroundColor: item.color,
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                        ":after": {
                          content: $value > 5 ? `"${Math.round($value)}%"` : "",
                          ...$theme.typography.fontBold13,
                          fontFamily: $theme.typography.primaryFontFamily,
                          lineHeight: "1.2",
                          color: $theme.colors.textDark,
                          position: "absolute",
                          top: "-2px",
                          right: "-40px"
                        }
                      };
                    }
                  }
                }}
              />
            </ProgressSingle>
          ))}
        </Progressbox>
      </TopPart>
      <BottomPart>
        <MapLengendBox>
          {data.map((item, index) => (
            <MapLengendBoxSingle key={index}>
              <MapLengendTitle>
                <MapLengendColor style={{ backgroundColor: item.color }} />
                {item.name}
              </MapLengendTitle>
              <MapLengendValue>{numberWithCommas(item.value)}</MapLengendValue>
            </MapLengendBoxSingle>
          ))}
        </MapLengendBox>
      </BottomPart>
    </Box>
  );
};

export default MapWidget;
