import styled from 'styled-components';
import { teal, elevation } from '../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers'
import { lighten } from 'polished';

const BUTTON_MODIFIERS = {
	small: () => `
	font-size: 2rem;
  padding: 3px 10px;
	`,
	cancel: () => `
	background: tomato;
	`
}


export const white = 'white';
export const Button = styled.button`
  color: white;
  padding: 25px 20px;
  border-radius: 5px;
  font-weight: bold;
  background: ${teal};
  ${elevation[1]};
  &:hover {
  	background: ${lighten(0.2, teal)}
  	${elevation[2]}
  }
  ${applyStyleModifiers((BUTTON_MODIFIERS))}
`;
export const CancelButton = styled(Button)`
  color: white;
  background: aqua;
  padding: 10px;
`;