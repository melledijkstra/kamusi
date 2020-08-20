import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { Layout, Typography, Empty, } from 'antd'
import db from './db/dexie'
import InputForm from './InputForm'
import LexemInfo from './LexemInfo'

let dict = require('./db/swahili-by-word.json')
console.log(dict)



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'babu',
      dictionary: dict
    }
  }

  termExists(searchTerm) {
    this.setState({
      termExists: searchTerm in this.state.dictionary
    })
  }

  render() {

    let lexem = this.state.dictionary[this.state.searchTerm]

    return (
      <Layout style={{padding: '20px'}}>
        <Layout.Content style={{ margin: '10vh auto 50px auto' }}>
          <Typography.Title>Kamusi ya Kiswahili</Typography.Title>
          <InputForm onChange={this.inputChange.bind(this)} />
        </Layout.Content>
        <div style={{ backgroundColor: 'white' }}>
          {this.state.termExists ? <LexemInfo lexem={lexem} /> : <Empty />}
        </div>
      </Layout>
    )
  }

  inputChange(event) {
    let searchTerm = event.target.value
    this.setState({ searchTerm })
    this.termExists(searchTerm)
  }

}

export default App;
