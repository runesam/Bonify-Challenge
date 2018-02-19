import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import utils from '../utils';


const Video = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 15px;
	border: 1px solid gray;
	& > img {
		flex: 2;
	}
	& > div {
		position: relative;
		flex: 8;
		display: flex;
		flex-direction: column;
		padding: 10px;
		p {
		    height: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 19.3px;
        }
		button {
			position: absolute;
			bottom: 10px;
			right: 10px;
		}
	}
`;

class SingleVideo extends PureComponent {
	constructor(props) {
		super(props);
		this.handleLikeVideo = this.handleLikeVideo.bind(this);
		this.state = {
			liked: false,
		};
	}

	handleLikeVideo() {
		// gapi.client.youtube.videos.rate({
		// 	id: this.props.data.id.videoId,
		// 	rating: this.state.liked ? 'dislike' : 'like',
		// });
		utils.postData('videos/rate', {
			id: this.props.data.id.videoId,
			rating: this.state.liked ? 'dislike' : 'like',
			// key: 'AIzaSyCN_kF7o_x1xCAOfZ8ANU31PxvbBd40L_c',
			oauth_token: this.props.tokenId,
		}).then(res => console.log(res));
		this.setState({
			liked: !this.state.liked,
		});
	}

	render() {
		return (
			<Video>
				<img
					src={this.props.data.snippet.thumbnails.medium.url}
					alt={this.props.data.snippet.title}
					className='float-left'
				/>
				<div>
					<h6>{this.props.data.snippet.title}</h6>
					<p>{this.props.data.snippet.description}</p>
					<button
						className={`btn btn${this.state.liked ? '' : '-outline'}-primary`}
						onClick={this.handleLikeVideo}
					>
						<span role='img' aria-label="Okay">
							{this.state.liked ? 'Liked 👎' : 'Like 👍'}
						</span>
					</button>
				</div>
			</Video>
		);
	}
}

export default SingleVideo;

SingleVideo.defaultProps = {
	data: PropTypes.object,
	tokenId: PropTypes.string,
};

SingleVideo.propTypes = {
	data: PropTypes.object,
	tokenId: PropTypes.string,
};
