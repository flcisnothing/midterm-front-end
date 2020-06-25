import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Chapter from "./Chapter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      chapters: [],
    };
  }

  componentDidMount() {
    this.ajaxGET(
      "https://cwpeng.github.io/live-records-samples/data/content.json"
    ).then((result) => {
      this.setState({
        headline: result.headline,
        chapters: result.chapters,
      });
    });
  }

  ajaxGET(url) {
    return new Promise((resolve) => {
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        const result = JSON.parse(xhr.responseText);
        resolve(result);
      };
      xhr.open("GET", url);
      xhr.send();
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <ul className="nav">
              {this.state.chapters.map((chapter) => (
                <li key={chapter.key}>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-item--selected"
                    to={`/${chapter.key}`}
                  >
                    {chapter.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </header>
          <Switch>
            {this.state.chapters.map((chapter) => (
              <Route key={chapter.key} path={`/${chapter.key}`}>
                <Chapter chapter={chapter} />
              </Route>
            ))}
            <Route path="/">
              <div>
                <h1 className="title">{this.state.headline}</h1>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
