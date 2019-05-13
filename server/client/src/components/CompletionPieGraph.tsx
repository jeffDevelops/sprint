import React, { useContext } from 'react';
import styled, { ThemeContext, DefaultTheme } from 'styled-components';

import { ResponsivePie, PieDatum } from '@nivo/pie';

interface ICompletionPieGraphProps {
  readonly completion: number
  readonly incompletion: number
}

const RelativeContext = styled.div`
  position: relative;
  height: 80%;
  width: 50%;
  margin: 0 auto;
`;

const PieContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompletionPieGraph: React.FC<ICompletionPieGraphProps> = (props: ICompletionPieGraphProps) => {
  const theme: DefaultTheme = useContext(ThemeContext);

  const allData: PieDatum[] = [
    {
      "id": "Incomplete",
      "label": "Incomplete",
      "value": props.incompletion,
      "color": '#fff'
    },
    {
      "id": "Completed",
      "label": "Completed",
      "value": props.completion,
      "color": theme.colors.main
    },
  ];

  const allColors: string[] = [
    '#fff',
    theme.colors.main,
  ];

  let data: PieDatum[] = allData;
  let colors: string[] = allColors;

  if (props.completion === 100){ 
    data = [ allData[1] ];
    colors = [ allColors[1] ]
  }

  if (props.completion === 0) {
    return <PieContainer>0%</PieContainer>
  } else {
    return (
      <RelativeContext>
        <PieContainer>
          <ResponsivePie
            data={ data }
            colors={ colors }
            sliceLabel={ data => `${data.value}%`}
            slicesLabelsTextColor="#fff"
            radialLabelsTextColor="#fff"
            innerRadius={ .7 }
            enableRadialLabels={ false }
            animate={ true }
          />
        </PieContainer>
      </RelativeContext>
    )
  }
}

export default CompletionPieGraph;