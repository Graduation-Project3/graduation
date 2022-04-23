import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "./home-nav";
import Slider from "./home-slider";
import HomeCard from "./home-card";
import Test from "./home-test";
import Footer from "./home-footer";
import Axios from 'axios';




function Home() {
    const [all, setAll] = useState([]);
    useEffect(() => {
        Axios.get('/home').then(response => {
            console.log(response.data);
            setAll(response.data)
        }
        )
    }, []);
    return (

        <Fragment>

            <Nav />
            <Slider />
            <HomeCard items={all} />
            <Test  />
            <Footer />

        </Fragment>

    );
}

export default Home;