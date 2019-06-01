import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button } from './elements';

class App extends Component {

	render() {
		return (
				<>
					<Header/>
					<GlobalStyle/>
					<Button>Click</Button>
					<Button modifiers='cancel'>Click</Button>
					<Button modifiers='small'>Click</Button>
					<Button modifiers={['small', 'cancel']}>Click</Button>
				</>
		);
	}
}

export default App;
