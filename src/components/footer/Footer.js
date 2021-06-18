import React, {useState} from 'react';
import AddTopic from "../topics/AddTopic";
import { Container, Row, Col } from "react-bootstrap";

function Footer () {
    const colStyle = {
        margin: "0",
        padding: "0"
    }

    const rowStyle = {
        margin: "0",
        padding: "0"
    }

    return (
        <footer>
            <div class="footerHolyBe">
                <h2>Holybe Forum</h2>
            </div> 
            <div class="footerLcc">
                <h5>Onze community</h5>
            </div>         
        </footer>
    );
}

export default Footer;