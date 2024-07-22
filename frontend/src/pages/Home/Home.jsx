
import { NavLink } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
// import Tabs from "../../components/Tabs/tabsWithID/TabsWithID";


const Home = () => {



    return (
        <>
            <div className="App">

                <h1>Ich bin die Startseite</h1>
                <NavLink to={"/card"}>nach karte bild!</NavLink><br />
                <NavLink to={"/kontakt"}>Kontaktieren Sie uns! hallo</NavLink>

                <Tabs />


            </div>

        </>
    );
};

export default Home;
