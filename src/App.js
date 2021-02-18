import "./App.css";
import masterImage from "./assets/Group 2339.svg";
import masterImage2x from "./assets/Group 2339.svg";
import masterImage3x from "./assets/Group 2339.svg";

import user from "./assets/user-circle-solid.svg";
import down from "./assets/round-keyboard_arrow_down-24px.svg";

function App() {
	return (
		<div className={"mobile-container"}>
			<div className={"main-content"}>
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
				<div>
					<input
						className={"searchBar"}
						placeholder={"Search for your perfect rental car"}
					/>
				</div>

				{/* <div className={"cardView"}>
					<div className={"sponsors"}></div>
					<div className={"subHeading"}>Featured cars</div>
					<div className={"carousal"}></div>
				</div>
				<div>View All Cars</div> */}
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

export default App;
