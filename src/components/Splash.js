import React from 'react';
import styled from 'styled-components';

const Splash = () => {
	return (
		<StyledSplash>

		</StyledSplash>
	);
}

const StyledSplash = styled.div`
	background-image: url(https://images.unsplash.com/photo-1549357172-114bfda41528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80);
	background-position: center;
	background-size: cover;
	width: 100%;
	height: 100vh;
	position: relative;
	top: -10vh;
`


export default Splash;
