import React, { Component } from "react";

export default class Meetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      myMeetings: []
    };
  }

  render() {
    return (
            <div>
                <h1>Мои встречи</h1>
                <p></p>
                <ul>
                    {/* НУЖНО ЧТОБ ВЫВОДИЛСЯ СПИСОК встреч */}
                    {/* {{#each this.state.myMeetings}}
                   <li>{{this}}</li>
                    {{/each}} */}
                </ul>
                <p></p>
            </div>
    );
  }
}
