import React from "react";
import Child from "./Child.js";

export default class App extends React.Component{
	render() {
		return (
			<div>
				<Child name={1}/>
			</div>
		)
	}
}
