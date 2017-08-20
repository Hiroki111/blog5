import React from 'react';
import {
	HashRouter,
	Route,
	NavLink
}
from 'react-router-dom';
import Posts from './Posts';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HashRouter>
				<div>
					<ul className="sidebar">
        				<li className="sidebar-list">
        					<NavLink to="/posts" style={{ textDecoration: 'none' }} activeStyle={{ color: 'red' }}>Posts</NavLink>
        				</li>
        			</ul>
					<div className="admin-contents">
						<Route path="/posts" component={Posts}/>
					</div>
				</div>
			</HashRouter>
		);
	}
}