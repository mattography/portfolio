import React from "react";
const About = resumeData => {
	const {
		resumeData: { whoami, whatdoido, whydoidoit }
	} = resumeData;

	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img
						className="profile-pic"
						src="https://media-exp1.licdn.com/dms/image/C4E03AQETtdgnBDei0g/profile-displayphoto-shrink_400_400/0/1517668943695?e=1613001600&v=beta&t=N2xoM8Nf-yB8gzeQWmTCQuy3B-RFAmq2xNzXUtIpRy0"
						alt=""
					/>
				</div>

				<div className="nine columns main-col">
					<h2>Who am I?</h2>
					<p>{whoami}</p>
					<h2>What do I do?</h2>
					<p>{whatdoido}</p>
					<h2>Why do I do it?</h2>
					<p>{whydoidoit}</p>
				</div>
			</div>
		</section>
	);
};
export default About;
