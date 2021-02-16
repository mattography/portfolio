import React from "react";
const Resume = resumeData => {
	const {
		resumeData: { work: jobs, portfolio: projects }
	} = resumeData;
	return (
		<section id="work">
			<div className="row skill section-content-spacer" id="work">
				<div className="three columns header-col">
					<h1>
						<span>Work</span>
					</h1>
					<p>Companies I have worked for.</p>
				</div>

				<div className="nine columns main-col resume">
					{jobs.map(job => (
						<a href={job.link}>
							<img src={job.logo} alt={job.CompanyName} />
						</a>
					))}
				</div>
			</div>

			<div className="row work section-content-spacer" id="projects">
				<div className="three columns header-col">
					<h1>
						<span>Projects</span>
					</h1>
					<p>Fun and interesting side projects to keep up the skills.</p>
				</div>

				<div className="nine columns main-col projects">
					{projects &&
						projects.map(item => {
							return (
								<div className="row item">
									<div className="twelve columns">
										<h3>{item.name}</h3>
										<p>{item.projectType}</p>
										<p className="info">{item.description}</p>
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
