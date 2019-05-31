import styled from 'styled-components';
import { fixedTop } from '../utilities'

export const color = 'white';
export const Button = styled.button`
  color: ${color};
  padding: 25px 20px;
  border-radius: 5px;
  font-weight: bold;
  background: indigo;
`;
export const CancelButton = styled(Button)`
  color: ${color};
  background: aqua;
  padding: 10px;
  ${fixedTop}
`;