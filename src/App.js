import React from 'react';
import logo from './logo.svg';
import styled, { css } from 'styled-components';
import GlobalStyle from './Global';


const size = {
	small: 400,
	med: 960,
	large: 1140,
};

const above = Object.keys(size).reduce((acc, label) => {
	acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
`;
	return acc;
}, {});

const below = Object.keys(size).reduce((acc, label) => {
	acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
`;
	return acc;
}, {});

//CSS Helper
// Needed for props in mixins
const fixedTop = css`
	position: fixed;
	top: ${({top}) => top + 'px'};
	left: 0;
`
const fixedTop1 = `
	position: fixed;
	top: 0;
	left: 0;
`

const Fake = ({ className }) => <div className={className}>
	<h2> I'm a fake component </h2>
</div>;

const Heading = styled.h1`
  font-size: 2rem;
  ${above.med`
    color: blue
  `}
`;

const color = 'white';
const Button = styled.button`
  color: ${color};
  padding: 25px 20px;
  border-radius: 5px;
  font-weight: bold;
  background: indigo;
`;
const CancelButton = styled(Button)`
  color: ${color};
  background: aqua;
  padding: 10px;
  ${fixedTop}
`;

const AppWrapper = styled.div`
  background: #61dafb;
  header {
    background: teal;
      &:hover {
      background: red;
    }
  }
  img {
  width: 500px;
  }
  ${Button} {
  margin-bottom: 2rem;
  }
`;

const DoubleFake = styled(Fake)`
    h2 {
    color: red;
    }
`;

function App() {
	return (
			<AppWrapper>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<Heading className='App'>
						Edit <code>src/App.js</code> and save to reload.
					</Heading>
					<DoubleFake/>
					<Fake/>
					<Button type="okay">Save</Button>
					<CancelButton top={300}>Cancel</CancelButton>
					<Heading>Heading two</Heading>
					<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				<GlobalStyle/>
			</AppWrapper>
	);
}

export default App;
