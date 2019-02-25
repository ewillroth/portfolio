import React from 'react';
import styled from 'styled-components';
import gitHubIcon from '../assets/icons/github-original.svg'
import linkedInIcon from '../assets/icons/linkedin-plain.svg'
import phoneIcon from '../assets/icons/phone-receiver.svg'
import emailIcon from '../assets/icons/close-envelope.svg'

const Contact = () => {
	return (
		<Cont>
			<ContactCard>
				<img src={phoneIcon}></img>
				<p>281-685-2086</p>
			</ContactCard>
			<ContactCard>
				<a href="mailto:ewillroth@gmail.com"><img id="mailimg" src={emailIcon}></img></a>
				<p id="mailp">ewillroth@gmail.com</p>
			</ContactCard>
			<ContactCard>
				<a href="https://github.com/ewillroth"><img src={gitHubIcon} alt="github" /></a>
				<p>github.com/ewillroth</p>
			</ContactCard>
			<ContactCard>
				<a href="https://www.linkedin.com/in/ewillroth/"><img src={linkedInIcon} alt="linkedin" /></a>
				<p>linkedin.com/in/ewillroth</p>
			</ContactCard>
   	 </Cont>
	);
}

const Cont = styled.div`
	background: #FFF;
	height: 50vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
	flex-wrap: wrap;
`
const ContactCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #000;
	img{
		width: 100px;
		margin-bottom: 20px;
	}
	img:hover {
		transform: scale(.97);
	}
`

export default Contact;
