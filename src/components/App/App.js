import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from '../About/About';
import Todo from '../Todo/Todo';
import styles from './App.module.css';

const App = () => (
	<Router>
		<div className = {styles.wrap}>
			<nav className = {styles.menu}>
				<NavLink to='/' exact className={styles.link} activeClassName={styles.link_active}>Обо мне</NavLink>
				<NavLink to='/todo'className={styles.link} activeClassName={styles.link_active}>Список дел</NavLink>
			</nav>
			<div className = {styles.content}>
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
			</div>
			<div className={styles.box_logo}>
				<div className={styles.wbs}> </div>
			</div>
		</div>
	</Router>
);

export default App;