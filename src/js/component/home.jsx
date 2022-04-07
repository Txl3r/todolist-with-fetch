import React, { useState, useEffect } from "react";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todoList, setTodolist] = useState([]);
	const [listItem, setListitem] = useState("");

	const line = (x) => {
		const newList = todoList.filter((element, index) => index !== x);
		setTodolist(newList);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/harvey46", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newList),
			redirect: "follow",
		})
			.then((response) => {
				response.status === 200 ? setTodolist(newList) : "";
			})
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/harvey46", {
			method: "GET",
			redirect: "follow",
		})
			.then((response) => response.json())
			.then((result) => setTodolist(result))
			.catch((error) => console.log("error", error));
	}, []);

	const addItem = (newItem) => {
		const newList = [...todoList, { label: newItem, done: false }];
		fetch("https://assets.breatheco.de/apis/fake/todos/user/harvey46", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newList),
			redirect: "follow",
		})
			.then((response) => {
				response.status === 200 ? setTodolist(newList) : "";
			})
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	};
	const completeTodo = (index) => {
		const list = [...todoList];
		list[index].done = !list[index].done;
		setTodolist(list);
	};
	console.log(todoList);
	return (
		<div className="container">
			<div className="input-group mb-3">
				<input
					type="test"
					className="form-control"
					placeholder="add a task"
					onChange={(e) => setListitem(e.target.value)}
					value={listItem}
				/>
				<button
					onClick={() => {
						if (listItem !== "") {
							addItem(listItem);
							setListitem("");
						}
					}}
					className="btn-btn-outline-secondary"
					type="button"
					id="button-addon2">
					Button
				</button>
			</div>
			<ul className="list-group">
				{todoList &&
					todoList.map((element, index) => {
						return (
							<li key={index} className="list-group-item">
								<div className={element.done ? "strike" : ""}>
									{element.label}
								</div>
								<button onClick={() => completeTodo(index)}>
									Strike
								</button>
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
