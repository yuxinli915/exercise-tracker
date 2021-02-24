import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

class CreateExercise extends Component {
	state = {
		username: "",
		description: "",
		duration: 0,
		date: new Date(),
		users: [],
	};
  userInput = React.createRef();

	componentDidMount = () => {
		this.setState({
			users: ["test user"],
			username: "test user",
		});
    this.userInput.current.focus();
	};

	onChangeUsername = e => this.setState({ username: e.target.value });

	onChangeDescription = e => this.setState({ description: e.target.value });

	onChangeDuration = e => this.setState({ duration: e.target.value });

	onChangeDate = date => this.setState({ date });

	onSubmit = e => {
		e.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date,
		};

		console.log(exercise);

		window.location = "/";
	};

	render = () => (
		<div>
			<h3>Create New exercise</h3>
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label>Username: </label>
					<select
						ref={this.userInput}
						required
						className="form-control"
						value={this.state.username}
						onChange={this.onChangeUsername}
					>
						{this.state.users.map(user => (
							<option key={user} value={user}>
								{user}
							</option>
						))}
					</select>
				</div>
				<div className="form-group">
					<label>Description: </label>
					<input
						type="text"
						required
						value={this.state.description}
						className="form-control"
						onChange={this.onChangeDescription}
					/>
				</div>
				<div className="form-group">
					<label>Duration (in minutes): </label>
					<input
						type="text"
						value={this.state.duration}
						className="form-control"
						onChange={this.onChangeDuration}
					/>
				</div>
				<div className="form-group">
					<label>Date: </label>
					<div>
						<DatePicker
							selected={this.state.date}
							onChange={this.onChangeDate}
						/>
					</div>
				</div>

				<div className="form-group">
					<input
						type="submit"
						value="Create User"
						className="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
}

export default CreateExercise;
