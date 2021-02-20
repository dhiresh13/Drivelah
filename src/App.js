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
import whatsapp from "./assets/whatsapp-brands.svg";
import phone from "./assets/logo.svg";

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
				<div className={"second-content"}>
					{/* {/* <div className={"main-content"}>
					<div className={"d-flex logo-active"}>
						<div>
							<img src={masterImage} />
						</div>
						<input placeholder={"search your car"} className={"header-input"} />
						<div className={"header-search"}>
							<i class="fa fa-search"></i>
						</div>
						<div style={{}} className={"rightLogo"}>
							<img src={user} />
							<img style={{ marginLeft: "5px" }} src={down} />
						</div>
					</div>
					<div className={"menuItems"}>
						<i class="fas fa-phone header-icon"></i>
						<i class="fab fa-whatsapp header-icon"></i>
					</div> 
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

						<div className={"horizontal-scroll-wrapper"}>
							<div className={"tile"}>
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

							<div className={"tile"}>
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
						</div>

						<button className={"viewButton"}>View all Cars</button>
					</div>
				</div> */}

					<div className={"backArrow"}>
						<i
							style={{ fontSize: "18px", marginRight: "20px" }}
							class="fas fa-arrow-left"></i>
						Search
					</div>
					<div className={"pillContainer"}>
						<div className={"pill-active"}>Daily</div>
						<div className={"pill"}>Hourly</div>
						<div className={"pill"}>Long Term</div>
					</div>

					<div className={"border-box"}>
						<label>Pickup Location</label>
						<input placeholder={"Enter your location"} />
					</div>
					<div className={"date"}>
						<div className={"border-box"}>
							<label>Pickup Date</label>
							<input placeholder={"Select Date"} />
						</div>
						<div className={"border-box"}>
							<label>Pickup Time</label>
							<input placeholder={"Select Time"} />
						</div>
					</div>
					<div className={"date"}>
						<div className={"border-box"}>
							<label>Dropoff Date</label>
							<input placeholder={"Select Date"} />
						</div>
						<div className={"border-box"}>
							<label>Dropoff Time</label>
							<input placeholder={"Select Time"} />
						</div>
					</div>
					<div>
						<button className={"searchButton"}>Search</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
