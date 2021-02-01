import React, { Component } from 'react'

 class RegularComponent extends Component {
    
    render() {
        console.log('RegularComponent render')
        return (
            <div>
                Regular Componet {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
