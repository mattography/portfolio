import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-46553920-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
	useEffect(() => {
	const item = document.querySelector(".scrolldown");
		item.animate([
			{transform: 'translateX(0px)'},
			{transform: 'translateY(20px)'}
		],{
		duration: 1000,
		easing: 'ease-in-out',
		direction: 'alternate',
		iterations: Infinity
		});
	},[]);
		return (
			<div className="App">
				<Header resumeData={resumeData} />
				<About resumeData={resumeData} />
				<Work resumeData={resumeData} />
				<Contact resumeData={resumeData} />
				<Footer resumeData={resumeData} />
			</div>
		);
};


export default App;
