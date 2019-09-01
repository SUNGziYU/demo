import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { Iconfont } from './Common/pic/iconfont/Iconfont'
import App from './App';


import * as serviceWorker from './serviceWorker';


const Test = () => {
    return (
        <Fragment>
            <App />
            <GlobalStyle />
            <Iconfont />
        </Fragment >
    )
}
ReactDOM.render(<Test />, document.getElementById('root'));


serviceWorker.unregister();
