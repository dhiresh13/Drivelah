import React from "react";
import "./App.css";
import masterImage from "./assets/Group 2339.svg";
import masterImage2x from "./assets/Group 2339.svg";
import masterImage3x from "./assets/Group 2339.svg";
import sponsor from "./assets/insuranceLogo-min.2ed44c50.png";
import sponsortwo from "./assets/Image 8.png";

import user from "./assets/user-circle-solid.svg";
import down from "./assets/round-keyboard_arrow_down-24px.svg";
import flex from "./assets/Group 2363.svg";
import like from "./assets/Group 191.svg";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onActive: false,
		};
	}
	render() {
		let { onActive } = this.state;
		return (
			<div className={"mobile-container"}>
				<div className={"main-content"}>
					<div className={"top-section"}>
						<div className={"d-flex logo"}>
							<div>
								<img src={masterImage} />
							</div>
							<div style={{ marginBottom: "65px" }} className={"rightLogo"}>
								<img src={user} />
								<img style={{ marginLeft: "5px" }} src={down} />
							</div>
						</div>
						<div className={"header"}>Rent your</div>
						<br />
						<div style={{ marginBottom: "10px" }} className={"header"}>
							neighbour's car
						</div>
						<div className={"d-flex"}>
							<input
								style={{ marginBottom: "10px" }}
								onFocus={() => this.setState({ onActive: true })}
								className={"searchBar"}
								placeholder={
									onActive
										? "Enter your location"
										: "Search for your perfect rental car"
								}
							/>
							<div className={"searchIcon"}>
								<i class="fa fa-search"></i>
							</div>
						</div>
					</div>
					<div className={"cardView"}>
						<div className={"sponsors"}>
							<div>
								<span>Insurance provided by</span>
								<img src={sponsor} />
							</div>
							<div>
								<span>Approved by</span>
								<img
									height={40}
									width={129}
									style={{ objectFit: "cover" }}
									src={sponsortwo}
								/>
							</div>
						</div>
						<h4 className={"subHeading"}>Featured cars</h4>

						<div>
							<div className={"carousalImage"}>
								<div className={"carousalBody"}>
									<img src={flex} />
									<img src={like} />
								</div>
							</div>
							<div className={"carousal-title"}>
								<div>
									<p>Chuan Do Tan’s</p>
								</div>
								<div className={"d-flex carousal-rightTitle"}>
									<i style={{ marginRight: "3px" }} class="fa fa-star" />
									<p>4.89</p>
									<label style={{ fontWeight: "500" }}>123 trips</label>
								</div>
							</div>
							<label className={"carName"}>Car brand name</label>

							<label className={"rate"}>$75 / day</label>
						</div>

						<button className={"viewButton"}>View all Cars</button>
					</div>
				</div>
				{/* 
			<div className={"backArrow"}>Search</div>
			<div className={"pills"}>
				<div>Daily</div>
				<div>Hourly</div>
				<div>Long Term</div>
			</div>
			<div className={"location-search"}>
				<input />
			</div>
			<div className={"date"}>
				<input />
				<input />
			</div>
			<div className={"time"}>
				<input />
				<input />
			</div><div><Button>SEARCH</Button></div> */}
			</div>
		);
	}
}

export default App;
