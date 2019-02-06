import React from 'react';
import styled from 'styled-components';

const Header = () => {
		return (
			<Nav>
				<Title>Eric Willroth</Title>
				<Links>
					<li>About</li>
					<li>Skills</li>
					<li>Projects</li>
					<li>Contact</li>
				</Links>
			</Nav>
		);
}

const Nav = styled.div`
	background: rgba(0,0,0,0)
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 5vh;
	color: #9197AE
	font-family: inconsolata;
	z-index: 1000;
`

const Links = styled.ul`
	display: flex;
	justify-content: space-evenly;
	text-decoration: none;
	width: 400px;
	font-size: 22px;
`

const Title = styled.h1`
	margin-left: 20px;
	font-size: 26px;
`


export default Header;
