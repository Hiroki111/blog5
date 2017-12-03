import React from 'react';
import {
	HashRouter,
	Route,
	NavLink,
	Redirect,
	Switch
}
from 'react-router-dom';
import PostMenu from './PostMenu';
import Images from './Images';
import Comments from './Comments';
import Stats from './Stats';
import EditingPost from './EditingPost';
import {
	connect
}
from 'react-redux';
import {
	fetchPosts,
	fetchPostsFulfilled,
	fetchPostsRejected
}
from '../actions/postActions';
import Notifications from 'react-notify-toast';
import {
	PulseLoader
}
from 'react-spinners';

@connect((store) => {
	return {
		posts: store.post.posts,
		loading: store.post.loading,
		form: store.form
	};
})
export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(fetchPosts()).data.then((result) => {
			const posts = {};
			result.data.forEach((post) => {
				posts[post.id] = post;
			});
			this.props.dispatch(fetchPostsFulfilled(posts));
		}).catch((error) => {
			this.props.dispatch(fetchPostsRejected(error));
		});
	}

	render() {
		return (
			<div>
				<div className='sweet-loading loading-bar'>
        			<PulseLoader color={'#123abc'} loading={this.props.loading} size={30} />
      			</div>
				<Notifications />
				<HashRouter>
					<div style={{'marginTop':"30px", 'marginLeft':'10px'}}>
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
							<Switch>
								<Redirect exact from="/" to="posts/" />
								<Route exact path="/posts/" render={(props) => <PostMenu posts={this.props.posts}/>}/>
								<Route path="/posts/new" component={EditingPost}/>
								<Route exact path='/posts/edit/:postId?' component={EditingPost}/>
								<Route exact path="/images" component={Images}/>
								<Route exact path="/comments" component={Comments}/>
								<Route exact path="/stats" component={Stats}/>
							</Switch>
						</div>
					</div>
				</HashRouter>
			</div>
		);
	}
}