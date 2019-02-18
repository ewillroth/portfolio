import React, { useEffect, useState } from 'react';
import styled, {keyframes} from 'styled-components';


const Header = props => {

	const [scroll, setScroll] = useState(window.scrollY)

	const trackScroll = () => {
		//tracks scroll position to update navbar colors
		document.addEventListener("scroll", () => {
			console.log(window.scrollY)
			if(window.scrollY>=560){
				setScroll(560)
			} else{
				setScroll(0)
			}
		})
		//function useEffect will use to remove event listener on unMount
		return function stopTracking(){
			document.removeEventListener("scroll", () => {
				console.log(window.scrollY)
			})
		}
	}

	const clickToScroll = (e) => {
		window.scroll({
			top: e.target.name,
			left: 0,
			behavior: 'smooth'
		})
}

	useEffect(trackScroll, [])

	return (
		<Nav scroll={scroll}>
			<Links>
				<Button scroll={scroll} name="560" onClick={clickToScroll}>About</Button>
				<Button scroll={scroll} name="1300" onClick={clickToScroll}>Skills</Button>
				<Button>Projects</Button>
				<Button>Contact</Button>
			</Links>
		</Nav>
	);
}

const Nav = styled.div`
	background: ${props => props.scroll >= 860 ? 'rgba(1,0,9,100)' : 'rgba(0, 0, 0, 0)'};
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	position: sticky;
	top: 0vh;
	height: 80px;
	color: #FFF;
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	z-index: 1000;
`

const Links = styled.div`
	display: flex;
	justify-content: space-evenly;
	text-decoration: none;
	width: 400px;
	font-size: 22px;
`
const shake = keyframes`
25% {
	transform: rotate(8deg);
}

50% {
	transform: rotate(0deg);
}

75% {
	transform: rotate(-8deg);
}

100% {
	transform: rotate(0deg);
}
`

const Button = styled.button`
	color: #FFF;
	:hover {
		-webkit-animation: ${shake} 0.4s infinite;
		animation: ${shake} 0.4s linear;
		cursor: pointer;
	}
`



export default Header;
