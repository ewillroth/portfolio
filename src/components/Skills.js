import React from 'react';
import styled from 'styled-components';

const Skills = () => {
	return (
		<Skill>
			<IconContainer>
				<Icon>
					
				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
				<Icon>

				</Icon>
			</IconContainer>
		</Skill>
	);
}

const Skill = styled.div`
	background: #010009;
	height: 600px;
	width: 100%;
	position: relative;
	top: -80px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	color: #FFF;
`

const IconContainer = styled.div`
	width: 80%;
	background: blue;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`

const Icon = styled.div`
	height: 140px;
	width: 140px;
	background: red;
	margin: 10px

`


export default Skills;
