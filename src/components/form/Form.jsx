import React from 'react'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={
            check:false
        }
    }
    
    render() {
    return (
      <div>
        <input disabled={this.state.check} type="text" name="" id=""  placeholder='name'/>
        <input disabled={this.state.check} type="text" name="" id="" />
        <label htmlFor="Check">
         Согласен(-сна) с условиями
            <input checked={this.state.check}  onChange={()=>this.setState({
                check:!this.state.check
            })} type="checkbox" name="" id="Check" />
            
        </label>
        <button disabled={!this.state.check}>Send</button>
      </div>
    )
  }
}
export default Form