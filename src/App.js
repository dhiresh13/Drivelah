import "./App.css";
import logo from "./assets/Group 2339.svg";
import user from "./assets/user-circle-solid.svg";
import down from "./assets/round-keyboard_arrow_down-24px.svg";

function App() {
	return (
		<div className={"mobile-container"}>
			<div className={"main-content"}>
				<div className={"logo"}>
					<img src={logo} />
					<div>
						<img src={user} />
						<img src={down} />
					</div>
					<div className={"header"}></div>
					<div className={"searchbar"}></div>
				</div>
			</div>
		</div>
	);
}

export default App;
