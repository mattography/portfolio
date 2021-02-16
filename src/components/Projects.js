import React from "react";
const Resume = resumeData => {
	const {
		resumeData: { portfolio: projects }
	} = resumeData;
	return (
		<section id="projects">
			<div className="row projects section-content-spacer">
				<div className="three columns header-col">
					<h1>Projects</h1>
					<p>
						A sample of fun, interesting freelance and personal work to keep up
						skills.
					</p>
				</div>

				<div className="nine columns main-col projects">
					{projects &&
						projects.map((item, i) => {
							return (
								<div className="row item" key={i}>
									<div className="twelve columns">
										<h3>{item.name}</h3>
										<p>{item.projectType}</p>
										<p className="info">{item.description}</p>
										<span><a href={item.link} alt={item.name} target="_blank" rel="noopener noreferrer">View Site</a></span>
										<img src={item.imageurl} alt={item.name} />
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};
export default Resume;
