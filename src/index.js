import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import App from './App';
import { ResetCss } from './style.js';
import { Iconfont } from './statics/iconfont/iconfont';

ReactDOM.render(
	<BrowserRouter >
		<ResetCss/>
		<Iconfont/>
		<App />
	</BrowserRouter>,
	document.getElementById('root'));
