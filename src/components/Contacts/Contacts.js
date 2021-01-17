import React from 'react';
import styles from './Contacts.module.css';

const info = {
	mail: 'tz_ardn@mail.ru',
	phone: '+7(913)992-64-83'
}

const Contacts = () => (
	<div className={styles.wrap}>
		<div className={styles.main_info}>
			<a href="mailto:tz_ardn@mail.ru" className={styles.mail}>{info.mail}</a>
			<a href="https://t.me/tz_ardn" className={styles.telegram}>{info.phone}</a>
		</div>
		<div className={styles.social}>
			<a href="https://github.com/tzAriadna">
				<div className={styles.github}> </div>
			</a>
			<a href="https://vk.com/tz_ardn">
				<div className={styles.vk}> </div>
			</a>
			<a href="https://www.instagram.com/tz_ardn">
				<div className={styles.inst}> </div>
			</a>
		</div>
	</div>
)



export default Contacts;