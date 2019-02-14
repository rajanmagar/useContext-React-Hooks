import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const UserContext = React.createContext();

function Navbar() {
	const value = useContext(UserContext);
	return (
		<nav style={{ display: 'flex', justifyContent: 'space-between' }}>
			<span>Cool App</span>
			<span>Hello {value}</span>
		</nav>
	);
}

function Main() {
	return (
		<>
			<Navbar />
			<h1>Hello UseContext</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe velit
				fuga consectetur excepturi sunt, natus minima ab tenetur ex asperiores
				dolore eius est ducimus veniam vel optio vero facere impedit. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Facere, officiis.
				Doloremque, nihil nobis voluptatibus, aut alias, architecto impedit eum
				officiis ab eius sit unde ratione dolores eos! Voluptatum, enim
				asperiores?
			</p>
		</>
	);
}

function App() {
	const [name, setName] = useState('John Doe');
	return (
		<UserContext.Provider value={name}>
			<Main />
		</UserContext.Provider>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
