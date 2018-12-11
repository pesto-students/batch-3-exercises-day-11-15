import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import axios from 'axios';

/**
 * Axios is a promise based HTTP client for the browser and node.js.
 * Refer to their github page to see how to use it to make HTTP requests.
 * Axios: https://github.com/axios/axios
 *
 * It is best not to fetch data from a server in the `render` method.
 * Any change to the state of a component can cause a re-render of the
 * component. This will likely happen more often than we want.
 * Use the appropriate lifecycle method to make the axios request.
 *
 * Exercise:
 *
 *  Create a `GithubRepos` component that lists all the GitHub repos for a user.
 *  Allow the repos to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */
/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => {
  return <ul>{/* Task: The list of repos here */}</ul>;
};

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {};
const fetchRepo = that => {
  let url = ` https://api.github.com/users/${that.state.username}/repos`;
  axios
    .get(url)
    .then(response => {
      console.log('FEtching ' + url);
      const repository = response.data.map(obj => {
        return obj.name;
      });
      that.setState({
        repos: repository,
      });
      console.log(that.state);
      console.log(response);
    })
    .catch(error => {
      console.log('Error fetching or parsing data', error);
    });
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={event => this.setState({ username: event.target.value })}
        />
        <button onClick={() => fetchRepo(this)}>Get Repos</button>
        {this.state.repos}
      </div>
    );
  }
}

export default UsernameForm;
