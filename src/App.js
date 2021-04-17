import React from 'react'
import List from './containers/todolist/lists/lists.jsx'



class App extends React.Component {

  state = {
    datas: [
      { id: 1, des: "this is list 1" },
      { id: 2, des: "this is list 2" },
      { id: 3, des: "this is list 3" },
    ],
    data: ""
  }

  addTodoList = () => {
    let customdatas = [...this.state.datas];
    customdatas.push(this.state.data);
    this.setState({
      datas: customdatas
    })
  }

  getInputValues = (e) => {
    this.setState({
      data: {
        id: 4, des: e
      }
    })
  }

  deletTodoList = (evnt) => {
    let customdatas = [...this.state.datas];
    let filterArray = customdatas.filter((e, i) => e.id != evnt);
    this.setState({
      datas: filterArray
    })
  }


  render() {
    return (
      <div>
        <input onChange={event => this.getInputValues(event.target.value)} />
        <button onClick={() => this.addTodoList()}>Add Button</button>
        <List datas={this.state.datas} deletTodoListFunc={this.deletTodoList} />
      </div >
    )
  }
}

export default App;
