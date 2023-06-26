import React from "react";
import logo from "../../assets/logo.png";
import {
    ConnectParent,
    ConnectWrapper,
    FormHeader,
    FormContainer,
    FormFooter,
    LContainer,

} from "./connect.wallet.styles.js";
import { Link } from "react-router-dom";
import {
    FormControl,
    Button
    } from "@chakra-ui/react";
import voting from "../../assets/voting.png";
import trustwallet from "../../assets/trustwallet.png";
import metamask from "../../assets/Meta mask.png";
import phantom from "../../assets/phantom.png";
import coinbase from "../../assets/coinbase.png";




const ConnectWallet = () => {


    return (
        <ConnectParent>
            <ConnectWrapper>
                <div style={{
                    backgroundImage: `url(${voting})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw",
                    height: 800, width: 2000
                }}>

                    <FormContainer>
                        <form>
                            <FormHeader>

                                <LContainer>
                                    <img src={logo} alt="logo" />
                                </LContainer>
                                <h3>Connect your wallet </h3>
                                     

                            </FormHeader>

                            <FormControl marginBottom={"2px"}>
                                {" "}
                                <Button
                                    colorScheme={"#fff"}
                                    color={"#000"}
                                    width={"18.5rem"}
                                    mt={4}
                                    fontSize="15"
                                    fontWeight="600"
                                    fontFamily="inherit"
                                    backgroundColor={"#ffff"}
                                    height={"3rem"}
                                    marginBottom={"0.1rem"}
                                    borderRadius={"10px"}
                                    borderColor={"#B3B3B3"}
                                    text="Meta mask"

                                >
                                   <img src={metamask} alt="metamask" height={18} marginLeft={5}/> Meta mask


                                </Button>
                            </FormControl>
                            <FormControl marginBottom={"2px"}>
                                {" "}
                                <Button
                                    colorScheme={"#fff"}
                                    color={"#000"}
                                    width={"18.5rem"}
                                    mt={4}
                                    fontSize="15"
                                    fontWeight="600"
                                    fontFamily="inherit"
                                    backgroundColor={"#ffff"}
                                    height={"3rem"}
                                    marginBottom={"0.1rem"}
                                    borderRadius={"10px"}
                                    borderColor={"#B3B3B3"}
                                    text="Trust wallet"

                                >
                                    <img src={trustwallet } alt="trustwallet" height={18} marginRight={10}/>Trust wallet


                                </Button>
                            </FormControl>
                            <FormControl marginBottom={"2px"}>
                                {" "}
                                <Button
                                    colorScheme={"#fff"}
                                    color={"#000"}
                                    width={"18.5rem"}
                                    mt={4}
                                    fontSize="15"
                                    fontWeight="600"
                                    fontFamily="inherit"
                                    backgroundColor={"#ffff"}
                                    height={"3rem"}
                                    marginBottom={"0.1rem"}
                                    borderRadius={"10px"}
                                    borderColor={"#B3B3B3"}
                                    text="Phantom wallet"

                                >
                                   <img src={phantom} alt="phantom" height={18} marginLeft={5}/> Phantom wallet


                                </Button>
                            </FormControl>
                            <FormControl marginBottom={"2px"}>
                                {" "}
                                <Button
                                    colorScheme={"#fff"}
                                    color={"#000"}
                                    width={"18.5rem"}
                                    mt={4}
                                    fontSize="15"
                                    fontWeight="600"
                                    fontFamily="inherit"
                                    backgroundColor={"#ffff"}
                                    height={"3rem"}
                                    marginBottom={"0.1rem"}
                                    borderRadius={"10px"}
                                    borderColor={"#B3B3B3"}
                                    text="Coinbase wallet"

                                >
                                    <img src={coinbase} alt="coinbase" height={18} marginLeft={5}/>Coinbase wallet


                                </Button>
                            </FormControl>

                            <FormFooter><h3>By connecting a wallet, you agree to our <Link> Terms and
                                <br></br>Conditions</Link> and consent to its <Link>Privacy Policy </Link></h3>
                            </FormFooter>
                        </form>
                    </FormContainer>
                </div>
            </ConnectWrapper>
        </ConnectParent>

    );
};

export default ConnectWallet;