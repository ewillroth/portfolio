import React from 'react';
import styled from 'styled-components';

const Projects = () => {
	return (
		<Proj>
			<Projcard>
				<Project>
					
				</Project>
				<Project>

				</Project>
				<Project>

				</Project>
			</Projcard>
		</Proj>
	);
}

const Proj = styled.div`
	background: #FFF;
	height: 60vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	top: -12vh;
`
const Projcard = styled.div`
	background: #30343F;
	height: 50vh;
	width: 90%;
	display: flex;
	flex-direction: column;

`

const Project = styled.div`


`


export default Projects;
