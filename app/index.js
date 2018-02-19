import React, { PureComponent } from 'react';

import Map from './components/map.component';
import SingleVideo from './components/singleVideo.component';
import Loader from './components/loader.component';

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.updateLoadingState = this.updateLoadingState.bind(this);
		this.updateVideosData = this.updateVideosData.bind(this);
			this.state = {
			loading: true,
			data: null,
			tokenId: '',
		};
	}
	componentDidMount() {
		window.onSignIn = (googleUser) => {
			// gapi.load('auth2', function(e) {
			// 	console.log(e);
			// });
			const tokenId = googleUser.getAuthResponse().id_token;
			this.setState({ tokenId });
		};
		setTimeout(() => {
			this.setState({ loading: false });
		}, 3000);
	}
	updateLoadingState(loading) {
		this.setState({ loading });
	}
	updateVideosData(data) {
		this.setState({ data, loading: false });
	}
	renderVideoList() {
		if (this.state.data.items.length) {
			return this.state.data.items.map(item => (
				<SingleVideo
					tokenId={this.state.tokenId}
					data={item}
					key={item.id.videoId}
				/>
			));
		}
		return <p>no videos to show</p>;
	}
	render() {
		return (
			<div>
				{this.state.loading && <Loader loading={this.state.loading} />}
				<Map
					updateVideosData={this.updateVideosData}
					updateLoadingState={this.updateLoadingState}
				/>
				<br />
				<div className="col-12">
					{this.state.data && this.renderVideoList()}
				</div>
			</div>
		);
	}
}

export default App;
