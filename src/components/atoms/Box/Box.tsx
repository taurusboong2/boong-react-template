import styled from 'styled-components';
import {
  DisplayProps,
  display,
  FlexboxProps,
  flexbox,
  SpaceProps,
  space,
  color,
  FontWeightProps,
  fontWeight,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
} from 'styled-system';

interface Props
  extends DisplayProps,
    FlexboxProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FontWeightProps,
    PositionProps {}
const Box = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
  ${display}
  ${flexbox}
  ${space}
  ${color}
  ${layout}
  ${position}
  ${fontWeight}
`;

export default Box;
