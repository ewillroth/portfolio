import React from 'react';
import styled from 'styled-components';

const Projects = () => {
	return (
		<Proj>
			<Projcard>
				<Project>
					<p>Ordeer</p>
					<p>Group project built in 3 weeks with two other students</p>
					<ul>
						<li>Contains only functional components to utilize React Hooks</li>
						<li>Learned & implemented Material-UI to create display cards for each menu item</li>
						<li>I focused on front-end code including the registration page, order page and Jest testing</li>
						<li>Code: github.com/restaurant-ordering/ordeer</li>
					</ul>
				</Project>
				<Project>
					<p>Settle</p>
					<p>A tool to help groups make decisions</p>
					<ul>
						<li>Awarded most technical in my cohort</li>
						<li>Learned & implemented socket.io to enable realtime updates for suggestions and participants</li>
						<li>Used Firebase storage to enable users to upload images</li>
						<li>Live site: settleit.app | Code: github.com/ewillroth/settle</li>
					</ul>
				</Project>
			</Projcard>
		</Proj>
	);
}

const Proj = styled.div`
	background: linear-gradient(#010009, #FFF);
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	top: -80px;
	margin-bottom: -80px
`
const Projcard = styled.div`
	background: #000;
	height: 80%;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-evenly
`

const Project = styled.div`
	color: #fff;
	font-family: 'Nunito', sans-serif;
	margin: 10px;
	display: flex;
	flex-direction: column;
	p {
		margin: 10px 0px;
	}
`


export default Projects;
