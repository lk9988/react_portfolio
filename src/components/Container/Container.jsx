import React from "react";
import Project from "../Project/Project";
import styles from "./Container.module.css";

const Container = ({ cards }) => {
	return (
		<>
			<h1 className={styles.h1}>My Work</h1>
			<ul className={styles.cards}>
				{cards.map((card, i) => (
					<Project card={card} key={i} />
				))}
			</ul>
		</>
	);
};

export default Container;
