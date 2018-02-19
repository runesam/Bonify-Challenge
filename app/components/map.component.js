import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import utils from '../utils';

const MapContainer = styled.div.attrs({
	id: 'map',
})`
	width: 100vw;
	height: 50vh;
`;

class Map extends PureComponent {
	constructor(props) {
		super(props);
		this.mapOnClickHandler = this.mapOnClickHandler.bind(this);
		this.getVideosBody = {
			type: 'video',
			q: 'surfing',
			locationRadius: '10mi',
			part: 'snippet',
			key: 'AIzaSyCN_kF7o_x1xCAOfZ8ANU31PxvbBd40L_c',
		};
	}

	componentWillMount() {
		window.initMap = () => {
			const center = { lat: -25.363, lng: 131.044 };
			this.map = new window.google.maps.Map(document.getElementById('map'), {
				zoom: 4,
				center,
				styles: [
					{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
					{ elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
					{ elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
					{
						featureType: 'administrative.locality',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#d59563' }],
					},
					{
						featureType: 'poi',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#d59563' }],
					},
					{
						featureType: 'poi.park',
						elementType: 'geometry',
						stylers: [{ color: '#263c3f' }],
					},
					{
						featureType: 'poi.park',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#6b9a76' }],
					},
					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [{ color: '#38414e' }],
					},
					{
						featureType: 'road',
						elementType: 'geometry.stroke',
						stylers: [{ color: '#212a37' }],
					},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#9ca5b3' }],
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry',
						stylers: [{ color: '#746855' }],
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry.stroke',
						stylers: [{ color: '#1f2835' }],
					},
					{
						featureType: 'road.highway',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#f3d19c' }],
					},
					{
						featureType: 'transit',
						elementType: 'geometry',
						stylers: [{ color: '#2f3948' }],
					},
					{
						featureType: 'transit.station',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#d59563' }],
					},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [{ color: '#17263c' }],
					},
					{
						featureType: 'water',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#515c6d' }],
					},
					{
						featureType: 'water',
						elementType: 'labels.text.stroke',
						stylers: [{ color: '#17263c' }],
					},
				],
			});
			this.marker = new window.google.maps.Marker({
				position: center,
				map: this.map,
			});
			this.map.addListener('click', this.mapOnClickHandler);
		};
	}

	componentDidMount() {
		utils.getData('search', Object.assign({}, this.getVideosBody, { location: '-25.363,131.044' })).then(res => this.props.updateVideosData(res));
	}

	mapOnClickHandler(e) {
		const lat = e.latLng.lat();
		const lng = e.latLng.lng();
		const location = `${lat}, ${lng}`;
		this.marker.setPosition({ lat, lng });
		this.props.updateLoadingState(true);
		utils.getData('search', Object.assign({}, this.getVideosBody, { location })).then(res => this.props.updateVideosData(res));
	}

	render() {
		return (
			<MapContainer />
		);
	}
}

export default Map;

Map.defaultProps = {
	updateVideosData: PropTypes.func,
	updateLoadingState: PropTypes.func,
};

Map.propTypes = {
	updateVideosData: PropTypes.func,
	updateLoadingState: PropTypes.func,
};
