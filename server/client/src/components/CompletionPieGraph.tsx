import React, { useContext } from 'react';
import styled, { ThemeContext, DefaultTheme } from 'styled-components';

import { ResponsivePie } from '@nivo/pie';

interface ICompletionPieGraphProps {
  readonly completion: number
  readonly incompletion: number
}

const PieContainer = styled.div`
  max-height: 250px;
  height: 300px;
  width: 100%;
`;

const CompletionPieGraph: React.FC<ICompletionPieGraphProps> = (props: ICompletionPieGraphProps) => {
  const theme: DefaultTheme = useContext(ThemeContext);

  return (
    <PieContainer>
      <ResponsivePie
        data={[
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
        ]}
        colors={[
          '#fff',
          theme.colors.main,
        ]}
        sliceLabel={ data => `${data.value}%`}
        slicesLabelsTextColor="#fff"
        radialLabelsTextColor="#fff"
        innerRadius={ .7 }
        enableRadialLabels={ false }
        animate={ true }
      />
    </PieContainer>
  )
}

export default CompletionPieGraph;