import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="title">{this.props.chapter.title}</h1>
        <main className="main">
          {this.props.chapter.sections.map((section) => (
            <section key={section}>☛ {section}</section>
          ))}
        </main>
        <div className="back-to-home">
          <Link className="nav-item" to="/">
            ↩ 回首頁
          </Link>
        </div>
      </div>
    );
  }
}

export default Chapter;
