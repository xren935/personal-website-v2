import { Modal, Button } from "react-bootstrap";
import React from "react";
import ReactDOM from 'react-dom';
// import "../static/popup.css";
// import axios from 'axios';
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    
    handleClose (){
        this.setState({ show: false });
    };
    
    handleShow (){
        this.setState({ show: true });
    };
    
    render() {
        return(
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <div id="popup">
                    {/* <Modal.Header closeButton>
                        <h3>Sign up with us for 10% off your next purchase!</h3>
                    </Modal.Header> */}
                    <Modal.Header closeButton>
                        <h3>Thanks so much for visiting my (old) personal website! Check out the <a href="https://xren935.github.io/personal-website-v3/">latest version</a> of me if you like :)</h3>
                    </Modal.Header>
                    </div>
                </Modal>
                <div>{this.handleClose}</div>
            </div>
        );
    }
}

ReactDOM.render(<Popup />, document.getElementById('root'));
export default Popup;