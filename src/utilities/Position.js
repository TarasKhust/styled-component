import { css } from 'styled-components';

//CSS Helper
// Needed for props in mixins
export const fixedTop = css`
	position: fixed;
	top: ${({top}) => top + 'px'};
	left: 0;
`
export const fixedTop1 = `
	position: fixed;
	top: 0;
	left: 0;
`