import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import AuthSite from './component/Auth';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<AuthSite />, document.getElementById('root'));
registerServiceWorker();