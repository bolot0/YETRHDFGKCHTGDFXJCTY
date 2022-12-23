import React, { Component } from 'react'

export default class Toggles extends Component {
    constructor(props){
        super(props)
        this.state ={
            showText:true
        }
        this.selected = 'maybe'
        
    }


  render() {
    return (
      <div>
         <div >
            <button onClick={()=>this.setState({showText:!this.state.showText})}>Скрыть</button>
            {
                this.state.showText? <p >Подборка лучших новогодних ремиксов. Живая новогодняя ёлка. Атмосфера новогоднего праздника. Новогодняя Музыка с ёлкой.</p>:null
            }

            <div >
                <span>Вы уверены что хотите закончить курсы музики ?</span>
                <input
                    type="radio"
                    id="yes"
                    name="choose"
                    value="yes"
                    checked={this.selected === 'yes'}
                />
                <label htmlFor="yes">да</label>

                <input
                    type="radio"
                    id="no"
                    name="choose"
                    value="no"
                    checked={this.selected === 'no'}
                />
                <label htmlFor="no">нет</label>

                <input
                    type="radio"
                    id="maybe"
                    name="choose"
                    value="maybe"
                    checked={this.selected === 'maybe'}
                />
                <label htmlFor="maybe">может быт</label>
            </div>
        </div>
      </div>
    )
  }
}
