import styles from "./styles.module.css";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    const [value, onChange] = useState(new Date());

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome</h1>

				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
            <nav className={styles.calendar}>
            <Calendar onChange={onChange} value={value} />
            </nav>
		</div>
	);
};

export default Main;