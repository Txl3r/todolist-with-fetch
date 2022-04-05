import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todoList, setTodolist] = useState([]);
	const line = (x) => {
		const newList = todoList.filter((element, index) => index !== x);
		setTodolist(newList);
	};

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
					type="test"
					className="form-control"
					placeholder="add a task"
					onChange={(e) => setItem(e.target.value)}
					value={item}
				/>
				<button
					onClick={() => {
						if (item !== "") {
							setTodolist([...todoList, item]);
							setItem("");
						}
					}}
					type="btn btn-secondary"
					className="input-group-test"
					id="basic-addon1">
					Add Task
				</button>
			</div>
			<ul>
				{todoList.map((element, index) => {
					return (
						<li key={index} className="mr-2">
							{element}
							<a
								className="btn btn-primary"
								onClick={() => {
									line(index);
								}}>
								x
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
