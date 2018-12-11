import React, { Component } from 'react';
let axios = require('axios');

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
  
  //let reposits = axios.get('https://api.github.com/users/ankajgoyal/repos');
  //console.log(reposits);

  return (
    <ul>
      {
        }
    </ul>
  );
}

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {

};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }
  onNameChange(event){
    this.setState({username:event.target.value});
  }
  getRepos(event){
    axios.get('https://api.github.com/users/' + this.state.username + '/repos')
    .then(function(data){
      let data = data.data;
      let reposits = [];
      for(i of data){
        reposits.push(data.name);
      }
      this.setState({repos:reposits})
    })
   console.log(this.state.repos);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange = {this.onNameChange}
        />
        <button
          onClick={this.getRepos}
        >
          Get Repos
        </button>
        <GithubRepos />
      </div>
    );
  }
}

// class GithubRepos extends Component{
//   constructor(props){
//     super(props);
//   }
//   componentDidMount(){
//     let repos = axios.get('https://api.github.com/users/ankajgoyal/repos');
//     console.log(repos);
//   }
//   render() {
//     return (
//       <div></div>
//     );
//   }
// }
export default UsernameForm;
