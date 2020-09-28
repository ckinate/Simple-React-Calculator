import React, {Component} from 'react'


class Button extends Component{

    render(){

        return(
            <div className ='length' >
                <span className = {`column-${this.props.cols}`}> 
                <button className= 'calc-button' onClick = {()=> this.props.action(this.props.symbol)}>{this.props.symbol}</button>
                </span>
               
            </div>
        )
    }

}
export default Button