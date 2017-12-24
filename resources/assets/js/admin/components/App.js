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

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchPosts();
		this.props.fetchImages();
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
								<Route exact path="/images" render={(props) => <ImageMenu images={this.props.images}/>}/>
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

const mapStateToProps = (state) => {
	return {
		posts: state.post.posts,
		images: state.image.images,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPosts: () => {
			dispatch(fetchPosts()).data.then((result) => {
				dispatch(fetchPostsFulfilled(result.data));
			}).catch((error) => {
				dispatch(fetchPostsRejected(error));
			});
		},
		fetchImages: () => {
			dispatch(fetchImages()).data.then((result) => {
				dispatch(fetchImagesFulfilled(result.data));
			}).catch((error) => {
				dispatch(fetchImagesRejected(error));
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);