import React, { useState, useEffect } from "react";
const Header = ({resumeData}) => {
		const [isActive, setActive] = useState("");
		
		const toggleClass = (e) => {
			setActive(e.currentTarget.hash);
		};

		useEffect(() => {
			setActive(window.location.hash)
		})

		return (
			<React.Fragment>
				<nav id="nav-wrap">
						<a className="mobile-btn rotate-90-cw" href="#nav-wrap" title="Show navigation">
							Show navigation
						</a>
						<a className="mobile-btn rotate-90-cw" href="#" title="Hide navigation">
							Hide navigation
						</a>
						<ul id="nav" className="nav fade-in-top">
							<li className={isActive === "#home" ? "current": ""}>
								<a href="#home" onClick={toggleClass}>
									Home
								</a>
							</li>
							<li className={isActive === "#about" ? "current": ""} >
								<a href="#about" onClick={toggleClass}>
									About
								</a>
							</li>
							<li className={isActive === "#projects" ? "current": ""} >
								<a href="#projects" onClick={toggleClass}>
									Projects
								</a>
							</li>
							<li className={isActive === "#work" ? "current": ""} >
								<a href="#work" onClick={toggleClass}>
									Work
								</a>
							</li>
							<li className={isActive === "#contact" ? "current": ""} >
								<a href="#contact" onClick={toggleClass}>
									Contact
								</a>
							</li>
						</ul>
					</nav>
				<div className="header-overlay"></div>
				<header id="home">
					<div className="banner">
						<div className="banner-text">
							<h1 className="responsive-headline">
								Hi, I'm {resumeData.name}.
							</h1>
							<h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
								Scroll down to find out more.
							</h3>
						</div>
					</div>

					<p className="scrolldown">
						<a className="smoothscroll" href="#about">
							<i className="icon-down-circle"></i>
						</a>
					</p>
				</header>
			</React.Fragment>
		);
}

export default Header;
