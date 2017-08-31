import React from 'react';
import {
	HashRouter,
	Route,
	NavLink
}
from 'react-router-dom';
import Posts from './Posts';
import Images from './Images';
import Comments from './Comments';
import Stats from './Stats';

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
        					<NavLink to="/posts" style={{ textDecoration: 'none' }} activeStyle={{ color: 'red' }} replace>Posts</NavLink>
        				</li>
        				<li className="sidebar-list">
        					<NavLink to="/images" style={{ textDecoration: 'none' }} activeStyle={{ color: 'red' }} replace>Images</NavLink>
        				</li>
        				<li className="sidebar-list">
        					<NavLink to="/comments" style={{ textDecoration: 'none' }} activeStyle={{ color: 'red' }} replace>Comments</NavLink>
        				</li>
        				<li className="sidebar-list">
        					<NavLink to="/stats" style={{ textDecoration: 'none' }} activeStyle={{ color: 'red' }} replace>Stats</NavLink>
        				</li>
        			</ul>
					<div className="admin-contents">
						<Route path="/posts" component={Posts}/>
						<Route path="/images" component={Images}/>
						<Route path="/comments" component={Comments}/>
						<Route path="/stats" component={Stats}/>
					</div>
				</div>
			</HashRouter>
		);
	}
}