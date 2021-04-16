import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

import { Navbar, Nav, Form, Button, Modal } from "react-bootstrap";

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{backgroundColor:"lightblue ",margin:"70px",padding:"100px"}}>
      <div className="App">
        <ReactBootStrap.Navbar expand="lg">
          <Navbar.Brand href="#home">
            <h2 style={{ color: "blue" }}>LOGO</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#link" style={{marginLeft:"300px"}}>
                Feature
              </Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <Form inline>
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
              <Button style={{ marginRight: "50px" }}>start now</Button>
            </Form>
          </Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
      <section>
        <div>
          <h1 style={{ marginTop: "100px", marginLeft: "400px" }}>
            Demo Website
          </h1>
          <p style={{ marginLeft: "100px" }}>
            Make Yor Own Website. Find what you are Looking for in 1 Minute or
            Less! Privacy Friendly. Results & Answers. Unlimited Access. The
            Best Resources. <br></br>100% Secure. Always Facts. Services: Best
            Results,
          </p>
        </div>
        <div>
          <Button
            variant="primary"
            style={{ marginLeft: "400px" }}
            onClick={handleShow}
          >
            Show more
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit} className="white">
                <div className="input-field" style={{ margin: "20px" }}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={handleChange} />
                </div>

                <div className="input-field" style={{ margin: "20px" }}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field" style={{ margin: "20px" }}>
                  <label htmlFor="firstName">firstName</label>
                  <input type="text" id="firstName" onChange={handleChange} />
                </div>

                <div className="input-field" style={{ margin: "20px" }}>
                  <label htmlFor="lastName">lastName</label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={handleChange}
                  />{" "}
                </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  style={{ marginTop: "40px", backgroundColor: "lightgreen" }}
                >
                  SUBSCRIBE
                </Button>

                {/* <Button style={{margin:"10px",padding:"10p"}} onClick={handleClose}>
            SUBSCRIBE
          </Button> */}
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Button variant="outline-success" style={{ marginLeft: "50px" }}>
            Learn more
          </Button>
        </div>
      </section>
    </div>
  );
}
export default App;
