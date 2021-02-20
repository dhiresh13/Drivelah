import React from "react";

const Second = (props) => {
	return (
		<div className={"second-content"}>
			<div className={"backArrow"}>
				<i
					onClick={props.onSearch}
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
				<input
					onChange={props.handleChange}
					value={props.location ? props.location : null}
					placeholder={"Enter your location"}
				/>
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

			<button className={"searchButton"}>Search</button>
		</div>
	);
};

export default Second;
