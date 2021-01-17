import React from 'react';
import styles from './About.module.css';
import Repo from '../Repo/Repo';
import PropTypes from 'prop-types';
import Contacts from '../Contacts/Contacts';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoadingUser: true,
		errorUser: false,
	}

	componentDidMount() {
		octokit.users.getByUsername({
			username: 'tzAriadna'
		}).then(({ data })=> {
			this.setState({
				userInfo: data,
				isLoadingUser: false
			})
		}).catch(err => {
      this.setState({
          errorUser: true,
          isLoadingUser: false
      })
	  });
	}

	render() {
		const { isLoadingUser, userInfo, errorUser } = this.state;

		return (
			<div className={styles.box}>{isLoadingUser ? <CircularProgress color="secondary" /> : 
				<div className = {styles.wrap}>
					{!isLoadingUser && <div>
						{errorUser ? <div className={styles.error}>Ошибка: Такого пользователся не существует </div> : <div className={styles.user}>
							<img className = {styles.ava} src={userInfo.avatar_url} />
							<div className={styles.info_user}>
								<h1 className={styles.name}>{userInfo.name}</h1>
								<p className={styles.bio}>{userInfo.bio}</p>
								<Contacts className={styles.contacts}/>
							</div>
						</div>}
					</div>}
					<div className={styles.portfolio}>
						<h2 className={styles.title}>Мое портфолио:</h2>
						<a href="https://webheroschool.github.io/tesla-lending/" className={styles.site}>Верстка одностраничного сайта</a>
						<a href="https://webheroschool.github.io/js_game/" className={styles.game}>Игра на интуицию &laquo;Найди баг&raquo;</a>
					</div>
					<Repo />
				</div>
			}</div>
			
		)
	}
};

About.propTypes = {
	isLoadingUser: PropTypes.bool.isRequired,
	userInfo: PropTypes.array.isRequired,
	errorUser:PropTypes.bool.isRequired
};

export default About;