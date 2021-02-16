import React from "react";
const Contact = resumeData => {
	const {
		resumeData: { contact }
	} = resumeData;
	return (
		<section id="contact">
			<div className="row contact">
				<div className="three columns header-col">
					<h1>Contact</h1>
					<p>Get in touch!</p>
				</div>
				<div className="nine columns main-col contacts">
					{contact.map(item => (
						<a href={item.link}>
							<img src={item.logo} alt={item.link} />
						</a>
					))}
				</div>
			</div>
		</section>
	);
};
export default Contact;
