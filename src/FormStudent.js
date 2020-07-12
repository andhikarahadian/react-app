import React, { Component } from 'react';

export default class FormStudent extends Component{
    constructor(){
        super()
        this.state= {
            students: ['john doe']
        }
    }

    render(){
        return(
            <div>
                <span> { this.state.currentStudentName } </span><br/>
              <input type="text" name="student_name" onChange={(e) => this.setState({ currentStudentName: e.target.value }) }/>
              <br/>
              <input type="submit" value="add student"/>
              <h2>Students</h2>
              { this.state.students.map( student => {
                  return <h3> { student } </h3>
              }
                )}
            </div>
        )
    }
}