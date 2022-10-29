import React from 'react';
import { Link } from 'react-router-dom';

export default function Fallback() {
	return (
		<>
			<h1 style={{ color: 'red', fontSize: '2rem' }}>
				Oga, you don press spoil for this application
			</h1>

			<Link to="/">Go back to the Home Page</Link>
		</>
	);
}
