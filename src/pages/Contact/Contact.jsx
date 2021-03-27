/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import styles from "./Contact.module.css";

const Contact = (props) => {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.title}>Let's talk</h1>
				<h2 className={styles.email}>
					<a className={styles.a} href="mailto:lanabkim@gmail.com">
						lanabkim@gmail.com
					</a>
				</h2>
				<div className={styles.links}>
					<a href="https://github.com/lk9988" target="_blank">
						<i className={`fab fa-github ${styles.a} ${styles.icon}`}></i>
					</a>

					<a href="#" target="_blank">
						<i className={`fab fa-linkedin ${styles.a} ${styles.icon}`}></i>
					</a>
				</div>
			</section>
		</>
	);
};

export default Contact;
