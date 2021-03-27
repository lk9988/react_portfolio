/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";

import styles from "./MyWork.module.css";

import Container from "../../Container/Container";

const MyWork = (props) => {
	const [cards, setCards] = useState([
		{
			id: "1",
			title: "POOADAY",
			des: "Full-stack app with MySQL",
			fileURL: "../../images/pooaday.png",
			link: "https://pooaday.herokuapp.com",
		},
		{
			id: "2",
			title: "Worry Monster",
			des: "Full-stack React app with MongoDB",
			fileURL: "../../images/worrymonster.png",
			link: "https://github.com/LauraGwendolynBurch/worry_monster",
		},
		{
			id: "3",
			title: "Celeb Nationality Checker",
			des: "Javascript with API",
			fileURL: "../../images/project1.png",
			link: "https://pooaday.herokuapp.com",
		},
		{
			id: "4",
			title: "Budget Tracker",
			des: "Online/Offline app with IndexedDB",
			fileURL: "../../images/budget.png",
			link: "https://budget-tracker-off.herokuapp.com/",
		},
	]);
	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<Container cards={cards} />
				</div>
			</section>
		</>
	);
};

export default MyWork;
