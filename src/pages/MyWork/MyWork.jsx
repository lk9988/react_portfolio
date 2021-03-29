/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";

import styles from "./MyWork.module.css";

import Container from "../../components/Container/Container";
import pooaday from "../../images/pooaday.png";
import worry_monster from "../../images/worrymonster.png";
import project1 from "../../images/project1.png";
import budget from "../../images/budget.png";

const MyWork = (props) => {
	const [cards, setCards] = useState([
		{
			id: "1",
			title: "POOADAY",
			des: "Full-stack app with MySQL",
			fileURL: pooaday,
			link: "https://pooaday.herokuapp.com",
		},
		{
			id: "2",
			title: "Worry Monster",
			des: "Full-stack React app with MongoDB",
			fileURL: worry_monster,
			link: "https://github.com/LauraGwendolynBurch/worry_monster",
		},
		{
			id: "3",
			title: "Celeb Nationality Checker",
			des: "Javascript with API",
			fileURL: project1,
			link: "https://pooaday.herokuapp.com",
		},
		{
			id: "4",
			title: "Budget Tracker",
			des: "Online/Offline app with IndexedDB",
			fileURL: budget,
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
