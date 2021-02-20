import React from "react";
import "./assets/css/App.css";
import masterImage from "./assets/images/Group 2339.svg";
import sponsor from "./assets/images/insuranceLogo-min.2ed44c50.png";
import user from "./assets/images/user-circle-solid.svg";
import down from "./assets/images/round-keyboard_arrow_down-24px.svg";
import flex from "./assets/images/Group 2363.svg";
import like from "./assets/images/Group 191.svg";

import Second from "./secondPage";

//Stateful component
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onActive: false,
			onSearch: false,
			showMenu: false,
		};
		//Flag to show second screen
		this.onSearch = () => {
			let { onSearch } = this.state;
			onSearch = !onSearch;
			this.setState({
				onSearch,
			});
		};
	}
	render() {
		let { onActive, onSearch, showMenu } = this.state;
		console.log(this.state);
		return (
			<div className={"mobile-container"}>
				{!onSearch ? ( //Flag to set second screen
					<div className={"main-content"}>
						{showMenu ? ( //Menu flag
							<>
								<div className={"d-flex logo-active"}>
									<div>
										<img src={masterImage} />
									</div>
									<div>
										<input
											placeholder={"Search your car"}
											className={"header-input"}
										/>
										<div className={"header-search"}>
											<i class="fa fa-search"></i>
										</div>
									</div>
									<div
										onClick={() => this.setState({ showMenu: !showMenu })}
										className={"rightLogo"}>
										<img src={user} />
										<img style={{ marginLeft: "5px" }} src={down} />
									</div>
								</div>

								<div className={"menuItems"}>
									<i class="fas fa-phone header-icon"></i>
									<i class="fab fa-whatsapp header-icon"></i>
								</div>
							</>
						) : (
							<div className={"d-flex logo padding"}>
								<div>
									<img src={masterImage} />
								</div>
								<div
									onClick={() => this.setState({ showMenu: !showMenu })}
									className={"rightLogo"}>
									<img src={user} />
									<img style={{ marginLeft: "5px" }} src={down} />
								</div>
							</div>
						)}

						<div className={"padding"}>
							<div className={"header"}>
								<label>Rent your</label>
							</div>
							<br />
							<div style={{ marginBottom: "10px" }} className={"header"}>
								<label>neighbour's car</label>
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
								<div onClick={this.onSearch} className={"searchIcon"}>
									<i class="fa fa-search"></i>
								</div>
							</div>
						</div>

						<div className={"cardView"}>
							<div className={"sponsors"}>
								<div style={{ width: "50%" }}>
									<span>Insurance provided by</span>
									<img src={sponsor} />
								</div>
								<div className={"right-sponsor"}>
									<span>Approved by</span>
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
											<label>(123 trips)</label>
										</div>
									</div>
									<label className={"carName"}>Car brand name</label>

									<label className={"rate"}>
										$75 <p className={"day"}>&nbsp;/ day</p>
									</label>
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
					</div>
				) : (
					<Second onSearch={this.onSearch} /> //Second Screen Component
				)}
			</div>
		);
	}
}

export default App;
