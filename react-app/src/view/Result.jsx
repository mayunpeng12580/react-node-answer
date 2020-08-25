import React from 'react';
import {connect} from 'react-redux'
import { Button } from 'antd-mobile';

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class Counter extends React.Component{
    render(){
      //计数
      return (
        <div>
            <h1>恭喜你获得{this.props.location.state.score}分</h1>
          <Button type="primary" onClick={this.goDatiPage}>回到首页</Button>
        </div>
      )
    }
    goDatiPage = ()=> {
      this.props.history.push('/')
    }
  }
  
  // 将state映射到props
  function mapStateToProps(state){
    return {
      value:state.num
    }
  }
  
  function mapDispathToProps(dispatch){
    return {
      
    }
  }
  
  const App = connect(
    mapStateToProps,
    mapDispathToProps
  )(Counter)

export default App