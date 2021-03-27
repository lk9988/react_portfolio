import React from "react";

import styles from "./Skills.module.css";

const Skills = (props) => {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<h1 className={styles.h1}>Skills</h1>
					<h2 className={styles.h2}>Skills & Attributes</h2>
					<p className={styles.p}>
						Passion for learning new technologies. Capable of working within a
						team environment and independently. Ability to plan and time
						schedule, work under strict time pressure and adapt quickly when
						needed.
					</p>
					<div className={styles.skillset}>
						<div className={styles.left}>
							<h3 className={`${styles.skillset_title} ${styles.h3}`}>
								Skills
							</h3>
							<div className={styles.skill}>
								<div className={styles.skill_description}>
									<span>HTML</span>
									<span>99%</span>
								</div>
								<div className={styles.skill_bar}>
									<div className={`${styles.skill_value} ${styles.html}`}></div>
								</div>
							</div>
							<div className={styles.skill}>
								<div className={styles.skill_description}>
									<span>CSS</span>
									<span>80%</span>
								</div>
								<div className={styles.skill_bar}>
									<div className={`${styles.skill_value} ${styles.css}`}></div>
								</div>
							</div>
							<div className={styles.skill}>
								<div className={styles.skill_description}>
									<span>JavaScript</span>
									<span>70%</span>
								</div>
								<div className={styles.skill_bar}>
									<div className={`${styles.skill_value} ${styles.js}`}></div>
								</div>
							</div>
							<div className={styles.skill}>
								<div className={styles.skill_description}>
									<span>React</span>
									<span>60%</span>
								</div>
								<div className={styles.skill_bar}>
									<div
										className={`${styles.skill_value} ${styles.react}`}
									></div>
								</div>
							</div>
							<div className={styles.skill}>
								<div className={styles.skill_description}>
									<span>NodeJS</span>
									<span>60%</span>
								</div>
								<div className={styles.skill_bar}>
									<div className={`${styles.skill_value} ${styles.node}`}></div>
								</div>
							</div>
							<div className={styles.skill}>
								<div className={styles.skill_description}>
									<span>Express</span>
									<span>70%</span>
								</div>
								<div className={styles.skill_bar}>
									<div
										className={`${styles.skill_value} ${styles.express}`}
									></div>
								</div>
							</div>
							<div className={styles.skill}>
								<div className={styles.skill_description}>
									<span>MongoDB</span>
									<span>65%</span>
								</div>
								<div className={styles.skill_bar}>
									<div
										className={`${styles.skill_value} ${styles.mongo}`}
									></div>
								</div>
							</div>
							<div className={styles.skill}>
								<div className={styles.skill_description}>
									<span>NySQL</span>
									<span>65%</span>
								</div>
								<div className={styles.skill_bar}>
									<div
										className={`${styles.skill_value} ${styles.mysql}`}
									></div>
								</div>
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.tools}>
								<h3 className={`${styles.skillset_title} ${styles.h3}`}>
									Tools
								</h3>
								<ul className={styles.toollist}>
									<li>
										<span>Visual Studio Code</span>
									</li>
									<li>
										<span>Git</span>
									</li>
									<li>
										<span>Figma</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Skills;
