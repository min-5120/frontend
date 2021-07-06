import React from 'react';
import './App.less';
import {
  getRequest,
 } from './utils/request';

class App extends React.Component {
  state = {
    loaded: false,
    list: [],
  }
  componentDidMount() {
    getRequest('/wp-json/wp/v2/pages').then((res) => {
      console.log(res);
      this.setState({
        list: res,
        loaded: true,
      });
    })
  }
  render() {
    console.log(this.state.list, 11);
    if (!this.state.loaded) {
      return 'loaded...';
    }
    return (
      <div className="App">
        <h1>app</h1>
        {this.state.list.map(item => {
          return (
            <div key={item.id}>
              <div>{item.title.rendered}</div>
              <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
