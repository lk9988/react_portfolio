import React from "react";

import styles from "./Main.module.css";
import lk from "../../images/lk-bio.JPG";

const Main = (props) => {
	return (
		<>
			<section className={styles.home}>
				<div className={styles.container}>
					<img src={lk} alt="profile" className={styles.avatar} />
					<h1 className={styles.title}>
						Hello, <br />
						I'm Lana Kim
					</h1>
					<h2 className={styles.description}>
						A Full-stack developer currently residing in Seattle, USA.
					</h2>
					{/* need to change to link */}
					<button className={styles.contact}>
						<a className={styles.a} href="mailto:lanabkim@gmail.com">Contact Me</a>
					</button>
				</div>
			</section>
		</>
	);
};

export default Main;
