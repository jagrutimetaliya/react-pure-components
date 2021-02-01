import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class ParentComponent extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'JAgruti'
        }
    }
    componentDidMount(){
        setInterval(() => {
          this.setState({
            name : 'JAgruti'
          })
        },2000)
    }
    
    render() {
        console.log('Parent Component render')
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComponent
