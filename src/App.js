import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';


const Fake = ({ className }) => <div className={className}>
  <h2> I'm a fake component </h2>
</div>

const Heading = styled.h1 `
  font-size: 2rem;
`

const color = "white";
const Button = styled.button `
  color: ${color};
  padding: 25px 20px;
  border-radius: 5px;
  font-weight: bold;
  background: indigo;
`
const CancelButton = styled(Button) `
  color: ${color};
  background: aqua;
  padding: 10px;
`

const AppWrapper = styled.div `
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
`

const DoubleFake = styled(Fake)`
    h2 {
    color: red;
    }
`

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading className='App'>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <DoubleFake>
          <Fake/>
        </DoubleFake>
        <Button type="okay">Save</Button>
        <CancelButton>Cancel</CancelButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppWrapper>
  );
}


export default App;
