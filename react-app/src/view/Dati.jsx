import React from 'react';
import {connect} from 'react-redux'
import { Button } from 'antd-mobile';
import fns from '../store/asyncFn'
import '../asset/css/style.css'

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import loadingImg from '../asset/img/loading.gif'
class DatiCom extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        currentTimu: 0,
        optionStyle:['optionsItem','optionsItem','optionsItem','optionsItem'],
        isChoose:false,
        score:0
      }
    }

    componentWillMount(){
      this.props.getTimu()
      
    }

    componentDidMount(){
      
    }
    componentWillReceiveProps(){
      
    }

    componentDidUpdate(){
      console.log('-------------')
      console.log(this.props.timuList)
      console.log('-------------')
    }

    render(){
      //计数
      let timuArr = this.props.timuList;
      let currentTimu = this.state.currentTimu;
      let oStyle = this.state.optionStyle
      
      //如果数据没有加载进来，设置loading
      
      if (timuArr.length>0) {
      let option = JSON.parse(timuArr[currentTimu]['options']);

        return (
        
          <div>
  <h1>
              {currentTimu+1}、{timuArr[currentTimu]['quiz']}
            </h1>
            
            <div className='options'>
            
              {
                option.map((item, index)=>{
                    return (
                      <div key={index} onClick={()=>{this.answerEvent(index)}} className={oStyle[index]}>
                        {index+1}:{item}
                      </div>
                    )
                })
              }
              
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <img src={loadingImg} alt="加载中"/>
          </div> 
        )
      }
      
    }
    goDatiPage = ()=> {
      this.props.history.push('/dati')
    }
    answerEvent = (index)=>{

      if (this.state.isChoose) {
        return true;
      }

      let currentAnswer = this.props.timuList[this.state.currentTimu].answer
      let currentScore = this.state.score
      currentScore += 10;
      console.log(currentAnswer)
      
      if ((index+1)===Number(currentAnswer)) {
        console.log(currentAnswer);
        let optionStyle = this.state.optionStyle
        optionStyle[index] = 'optionsItem green'
        this.setState({
          optionStyle: optionStyle,
          isChoose: true,
          score:currentScore
        })
      } else {
        let optionStyle = this.state.optionStyle
        optionStyle[index] = 'optionsItem red'
        optionStyle[Number(currentAnswer) - 1] = 'optionsItem green'

        this.setState({
          optionStyle: optionStyle,
          isChoose: true
        })
      }

      setTimeout(() => {
        let currentTimu = this.state.currentTimu
        currentTimu++
        if(currentTimu == 10) {
          this.props.history.push('/result', {score: this.state.score})
        } else {
          this.setState({
            currentTimu:currentTimu,
            isChoose: false,
            optionStyle:['optionsItem','optionsItem','optionsItem','optionsItem']
  
          })
        }
        
      }, 3000);

      
    }
  }
  
  // 将state映射到props
  function mapStateToProps(state){
    return {...state}
  }
  
  function mapDispathToProps(dispatch){
    return {
      getTimu:async ()=>{
        let list = await fns.TmList()
        dispatch({type:'setTimu', content: list})
      }
    }
  }
  
  const Dati = connect(
    mapStateToProps,
    mapDispathToProps
  )(DatiCom)

export default Dati