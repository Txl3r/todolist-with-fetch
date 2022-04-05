import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todoList, setTodolist] = useState([]);

	useEffect(() => {
		fetch("http://assets.breatheco.de/apis/fake/todos/user/harvey46", {
			method: "GET",
			redirect: "follow",
		})
			.then((response) => response.json())
			.then((result) => setTodolist(result))
			.catch((error) => console.log("error", error));
	}, []);

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify([
		{
			label: "Make the bed",
			done: false,
		},
	]);

	var requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	fetch("http://assets.breatheco.de/apis/fake/todos/user/harvey46", {
		Method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newList),
		redirect: "follow",
	})
		.then((response) => {
			response.status === 200 ? setTodolist(newList) : "";
		})
		.catch((error) => console.log("error", error))

		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));

	console.log(todoList);
	return (
		<div className="container">
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"></input>
				<div className="input-group-append">
					<button
						onClick={() => {}}
						className="input-group-text"
						id="basic-addon2">
						Set Value
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
