import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { Layout, Typography, Empty } from 'antd'
import InputForm from './InputForm'
import LexemInfo from './LexemInfo'
import Duolingo from './duolingo.png'

let dict = require('./db/swahili-by-word.json')

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      dictionary: dict
    }
  }

  termExists(searchTerm) {
    this.setState({
      termExists: searchTerm in this.state.dictionary
    })
  }

  getLexemInfo() {
    return this.state.dictionary[this.state.searchTerm]
  }

  render() {

    let lexem = this.getLexemInfo()
    let description = this.state.searchTerm.length < 2 ? 'Write something like "Babu"' : 'Nothing found'

    return (
      <Layout>
        <Layout.Content style={{ margin: '0 auto 50px auto', textAlign: 'center', padding: '10px' }}>
          <img style={{margin: '0 auto', minWidth:'100px', maxHeight: '200px'}} src={Duolingo} alt="Duolingo Logo" />
          <Typography.Title>Kamusi ya Kiswahili</Typography.Title>
          <small style={{display: 'block', textAlign: 'left'}}>Translation information from Duolingo</small>
          <InputForm onChange={this.inputChange.bind(this)} />
        </Layout.Content>
        <div style={{ backgroundColor: 'white', padding: '40px' }}>
          {this.state.termExists ? <LexemInfo lexem={lexem} /> : <Empty description={description} />}
        </div>
      </Layout>
    )
  }

  inputChange(event) {
    let searchTerm = event.target.value.toLowerCase()
    this.setState({ searchTerm: searchTerm })
    this.termExists(searchTerm)
  }

}

export default App;
