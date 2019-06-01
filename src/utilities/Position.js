import { css } from 'styled-components';

export const fixed = ({ x = '100px', y = '200px', yProp = 'top', xProp = 'left'}) => {
	return css`
	position: fixed;
	${yProp}: ${y};
	${xProp}: ${x};
`
}