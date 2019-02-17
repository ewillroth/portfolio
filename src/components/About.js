import React from 'react';
import styled from 'styled-components';

const About = () => {
	return (
		<Abt>
			<img src='https://lh3.googleusercontent.com/Fk-MdFmjy_yYzTDGmCE-2x0qG79FqHNLqyrQVOC7rYGqsp2Ne3PysXXw8I5lOhtbfAURSqanP6sKyTQPcvaxH9njJMslpgD7nW1GQwpVQe6pwW-jwW8lox50OZEgb8dsOJJHJlv4G0qXpuWAcvQRbAbMmyQ3DuzRCaO9LVylwcsYkl_g5Dbttcuzere4AbuT9cyn_KvQaz_roGCzWSSbQax4_qdr7idcwUCp0y1ars0jtEM7HO3Jx583bdHYiQTsWiwP_InBAPSMF8Qyj8UaAVw6IkbyJOnSm1AGCECrzQDS03agxR-zvGN_rJDPwmfPL47W7-LKvEDLnDwr0n_MIgwihZeXE6roMXEF00EzIuwLN3_5BhCWU_YCxbpGrpFKB2Rg2OnNBDOK50QcuXgVC74mxFnsW6cplyN4JAfT0QudMFgkLGBl8-q-5SKiXUHE3DjZ4VICBLMZaG0XN-CvbyaeNmJCcbSGv5J49eC6-C6ZNb9elkZWkVVkSzrvLo5XLKeqJFJkzLESGIJwgK_uUu59nniXIhpjH_itOUmhy3gbjuek6Y8TSlO-_xRqYprU9Z_4MbB3zZO-UyC1HeTmqlQOIuOvrsItViL2O1fnhf_50AR4RDA3GtZOKrllq98UPGi04pfNNhmMWkCRH3QrLJvoeK7RHHM=s200-no' alt='' width="100px" height="100px"/>
			<Styledp> I have always had a passion for technology and problem solving. Web development gives me the opportunity to combine two of the things I enjoy most in life. In my time at DevMountain I gained the skills necessary to build clean, modular, scalable applications using the SERN stack, and many other technologies. </Styledp>
		</Abt>
	);
}

const Abt = styled.div`
	background: #010009;
	width: 100%;
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	font-family: 'Open Sans', sans-serif;
	position: relative;
	top: -12vh;
	img {
		width: 200px;
		height: 200px;
	}
`

const Styledp = styled.p`
	color: #9197AE
	width: 50%;
`

export default About;
