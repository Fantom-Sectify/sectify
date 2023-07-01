import React from "react";
import logo from "../../assets/logo.png";
import {
    HomeParent,
    HomeWrapper,
    LContainer,

} from "./home.styles.js";


import voting from "../../assets/voting.png";




const Home = () => {


    return (
        <HomeParent>
            <HomeWrapper>
                <div style={{
                    backgroundImage: `url(${voting})`, backgroundRepeat: "no-repeat",backgroundSize:"100vw 100vh",
                    height: 800, width: 2000
                }}>

                    

                                <LContainer>
                                    <img src={logo} alt="logo" />
                                </LContainer>
                                
                           
                </div>
            </HomeWrapper>
        </HomeParent>

    );
};

export default Home;