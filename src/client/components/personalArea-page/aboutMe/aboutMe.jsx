import React, { Component } from "react";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      aboutMe: ""
    };
  }

    handleLineChange = async (e) => {
      await this.setState({ aboutMe: e.target.value });
    };

    render() {
      return (
            <div>
                <h1>О себе</h1>
                <input onChange={this.handleLineChange} />
                <p></p>
                <button onClick={this.handleCountAndWrite}>Сохранить</button>
                <p></p>
            </div>
      );
    }
}
