import "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import MyWork from "./pages/MyWork/MyWork";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<HashRouter>
				<Header />
				<Switch>
					<Route exact path={["/", "/Main"]} component={Main} />
					<Route exact path="/About" component={About} />
					<Route exact path="/MyWork" component={MyWork} />
					<Route exact path="/Skills" component={Skills} />
					<Route exact path="/Contact" component={Contact} />
				</Switch>

				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
