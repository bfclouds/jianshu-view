import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './common/header';
import routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
	    <div>
	    	<Header />
	      	<Switch>
		      	<div>
		      	{
		      		routes.map((route) => {
			        	return (<Route key = {route.path} path = {route.path} component = {route.component}></Route>);
				    })
			    }
			    <Redirect exact path = "/" to = {routes[0].path} />
		      	</div>
	      	</Switch>
		</div>
    </Provider>
  );
}

export default App;
