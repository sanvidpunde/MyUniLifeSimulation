import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import {checkLoggedIn} from './redux/util/controller';
import myStore from './redux/store';

import App from './components/App';

const rootApp = (preloadedState) => {
	const store = myStore(preloadedState);
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	);
}

(async () => rootApp(await checkLoggedIn()))();