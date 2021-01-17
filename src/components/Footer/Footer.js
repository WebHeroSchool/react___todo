import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

class Footer extends React.Component {
	render() {
		const { count, filter, onChangeFilter, onClickDeleteComplete} = this.props;
		return (
			<div className={styles.footer}>
				<span>Еще нужно сделать дел: {count}</span>
				<ul className={styles.list}>
					<li className={filter === 'Все' ? styles.active : styles.item}
			      onClick={() => onChangeFilter('Все')}>
			      Все
				  </li>
				  <li className={filter === 'Активные' ? styles.active : styles.item}
			      onClick={() => onChangeFilter('Активные')}>
			      Активные
				  </li>
				  <li className={filter === 'Выполненые' ? styles.active : styles.item}
			      onClick={() => onChangeFilter('Выполненые')}>
			      Выполненые
					</li>
				</ul>
				<span
					className={styles.delete}
					onClick={() => onClickDeleteComplete()}
				>Удалить все выполненные</span>
			</div>
		)
	}
};

Footer.defaultProps = {
	count: 0
};

Footer.propTypes = {
	count: PropTypes.number.isRequired,
	filter: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
	onClickDeleteComplete: PropTypes.func.isRequired
};

export default Footer;