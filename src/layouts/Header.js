import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
import { social, elevation, fixed, serif } from '../utilities';

const Header = ({ className }) => (
			<header className={className}>
				<img src={logo} alt="logo" className="logo"/>
				Hello
			</header>
);

export default styled(Header)`
	background: ${social.facebook};
	padding: 10px 5%;
	${serif},
	${fixed},
	${elevation[3]}
	.logo {
		width: 300px;
	}
`
