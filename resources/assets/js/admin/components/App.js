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
import ImageMenu from './ImageMenu';
import Comments from './Comments';
import Stats from './Stats';
import PostEditor from './PostEditor';
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
import {
	fetchImages,
	fetchImagesFulfilled,
	fetchImagesRejected
}
from '../actions/imageActions';
import Notifications from 'react-notify-toast';
import LoadingAnimation from './LoadingAnimation';

@connect((store) => {
	return {
		posts: store.post.posts,
		images: store.image.posts,
		form: store.form
	};
})
export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(fetchPosts()).data.then((result) => {
			this.props.dispatch(fetchPostsFulfilled(result.data));
		}).catch((error) => {
			this.props.dispatch(fetchPostsRejected(error));
		});

		this.props.dispatch(fetchImages()).data.then((result) => {
			this.props.dispatch(fetchImagesFulfilled(result.data));
		}).catch((error) => {
			this.props.dispatch(fetchImagesRejected(error));
		});
	}

	render() {
		return (
			<div>
				<LoadingAnimation />
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
								<Route path="/posts/new" component={PostEditor}/>
								<Route exact path='/posts/edit/:postId?' component={PostEditor}/>
								<Route exact path="/images" component={ImageMenu}/>
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