import React from "react";
const Work = resumeData => {
	const {
		resumeData: { work: jobs }
	} = resumeData;
	return (
		<section id="experience" className="work-section">
			<div className="row work section-content-spacer">
				<div className="three columns header-col">
					<h1>
						<span>Experience</span>
					</h1>
					<p>Where I've been.</p>
				</div>

				<div className="nine columns main-col resume">
					{jobs.map((job, i) => (
						<a href={job.link} key={i}>
							<img src={job.logo} alt={job.CompanyName} />
						</a>
					))}
				</div>
			</div>
		</section>
	);
};
export default Work;
