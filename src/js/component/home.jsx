import React from "react";
import Counter from "./counter";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid d-flex">
			<Counter></Counter>
		</div>
	);
};

export default Home;
