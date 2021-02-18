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
						src="../images/me.jpeg"
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
