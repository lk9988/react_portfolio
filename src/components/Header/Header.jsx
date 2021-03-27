import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.logo}>
					{/* <i className="fab fa-diaspora"></i> */}

					<Link to="/Main">
						<i className={`fab fa-diaspora ${styles.a}`}></i>
					</Link>
				</div>
				<ul className={styles.menu}>
					<li className={`${styles.menu_item} ${styles.active}`}>
						<Link to="/Main">
							<h5 className={styles.h5}>Home</h5>
						</Link>
					</li>
					<li className={styles.menu_item}>
						<div className={styles.link}>
							<Link to="/About">
								<h5 className={styles.h5}>About</h5>
							</Link>
						</div>
					</li>
					<li className={styles.menu_item}>
						<Link to="/Skills">
							<h5 className={styles.h5}>Skills</h5>
						</Link>
					</li>
					<li className={styles.menu_item}>
						<Link to="/MyWork">
							<h5 className={styles.h5}>My Work</h5>
						</Link>
					</li>

					<li className={styles.menu_item}>
						<Link to="/Contact">
							<h5 className={styles.h5}>Contact</h5>
						</Link>
					</li>
				</ul>
				{/* need to make it toggle */}
				<button className={styles.btn}>
					<i className="fas fa-bars"></i>
				</button>
			</nav>
		</>
	);
};

export default Header;
