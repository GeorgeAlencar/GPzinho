import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import NavBar from "../../components/NavBar/NavBar";
import * as C from "../Home/styles";
import Footer from "../../components/Footer/Footer";
import Styles from "./Contact.module.css"

function Contact(){
    return(
    <>
        <NavBar></NavBar>
        <C.Container>
            <section className={Styles}>
                <C.Title>Contatos</C.Title>
            </section>
        </C.Container>
        <Footer></Footer>
    </>
    );
}

export default Contact;