import React from "react";
import styles from "./About.module.css";
import logo from "../../images/uwlogo.png";

const About = (props) => {
	return (
		<>
			<section className={styles.container}>
				<h1 className={styles.about}>About me</h1>
				<p>
					I am a full stack developer with certificate of UW Coding Bootcamp.
					<br />
					With curious eyes and open-minded for new things.
				</p>
				<div className={styles.majors}>
					<div className={styles.major}>
						<div className={styles.icon}>
							<i className={`fab fa-html5 ${styles.i}`}></i>
						</div>
						<h2 className={styles.title}>Front-end</h2>
						<div className={styles.description}>
							HTML, CSS, JavaScript,
							<br />
							React, Web APIs
						</div>
					</div>

					<div className={styles.major}>
						<div className={styles.icon}>
							<i className={`fas fa-server ${styles.i}`}></i>
						</div>
						<h2 className={styles.title}>Back-end</h2>
						<p className={styles.description}>
							NodeJS, SQL, Express
							<br />
							Rest APIs, MongoDB
						</p>
					</div>
				</div>
				<div className={styles.jobs}>
					<div className={styles.job}>
						<img src={logo} alt="uw" className={styles.logo} />
						<div className={styles.job_description}>
							<h3 className={styles.h3}>Education </h3>
							<p className={styles.job_name}>UW Coding Bootcamp</p>
							<p className={styles.period}>2020 Sept - Until now</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
