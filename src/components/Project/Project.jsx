/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./Project.module.css";

const Project = ({ card }) => {
	const { title, des, fileURL, link } = card;

	const url = fileURL;

	return (
		<li className={styles.card}>
			<a href={link} className={styles.link}>
				<img className={styles.img} src={url} alt="project photo" />

				<div className={styles.info}>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.des}>{des}</p>
				</div>
			</a>
		</li>
	);
};
export default Project;
