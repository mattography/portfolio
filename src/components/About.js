import React from "react";
const About = resumeData => {
	const {
		resumeData: { whoami, whatdoido }
	} = resumeData;

	return (
		<section id="about">
			<div className="row">
				<div className="twelve columns main-col">
					<h2>Who am I?</h2>
					<p>{whoami}</p>
					<h2>What do I do?</h2>
					<p>{whatdoido}</p>
				</div>
			</div>
		</section>
	);
};
export default About;
