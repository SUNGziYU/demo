import React, { PureComponent } from 'react';
import Header from './Common/Header';
import Home from './Common/Home';
import detail from './Common/detail';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={detail}></Route>
          </div>
        </BrowserRouter >
      </Provider>
    )
  }
}

export default App;
