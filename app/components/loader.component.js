import React from 'react';
import styled from 'styled-components';

import loaderSvg from './../images/loader.svg';

const Loader = () => {
	const LoaderContainer = styled.div`
		position: fixed;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
		background: rgba(0, 0, 0, 0.7);
	`;
	return (
		<LoaderContainer>
			<img src={loaderSvg} alt='loading the videos' />
		</LoaderContainer>
	);
};

export default Loader;
