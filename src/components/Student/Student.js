import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Student extends Component {
  constructor(props) {
    super(props)

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(response => {
      this.setState({
        studentInfo: response.data
      })
    })
  }

  render() {
    const {first_name, last_name, grade, email} = this.state.studentInfo
    console.log(this.props.match.params.id)
    return (
      <div className="box">
        <Link to={`/classlist/${this.state.studentInfo.class}`}><button>Return To Class</button></Link>
        <h1>Student</h1>
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
      </div>
    )
  }
}