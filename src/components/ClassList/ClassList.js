import React, { Component } from 'react';
import axios from 'axios'
import {Link, Route} from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props)

    this.state= {
      students: []
    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results => {
      console.log(this.props.match.params.class)
      console.log(results)
      this.setState({
        students: results.data
      })
    }
    )
  }

  render() {
    console.log(this.state.students)
    const students = this.state.students.map((value, i) => (
      <Link to={`/student/${value.id}`} key={i} ><h3>{value.first_name} {value.last_name}</h3></Link>
    ))
    return (
      <div className="box">
        <Link to='/'><button>Return To Home</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}