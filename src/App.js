import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header resumeData={resumeData} />
				<About resumeData={resumeData} />
				<Projects resumeData={resumeData} />
				<Work resumeData={resumeData} />
				<Contact resumeData={resumeData} />
				<Footer resumeData={resumeData} />
			</div>
		);
	}
}

export default App;
