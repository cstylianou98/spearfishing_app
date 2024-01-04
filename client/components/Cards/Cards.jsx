import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import cyprusImage from "../../assets/img/cyprus_map_card.jpg";
import freeDiverImage from "../../assets/img/freediver.webp";
import sargosImage from "../../assets/img/sargos_species.jpg";

function CardsComponent() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <div className="d-flex flex-row">
          <div
            className="card mx-auto"
            style={{ width: "18rem", height: "22rem" }}
          >
            <Card.Img
              variant="top"
              src={`${cyprusImage}`}
              alt="Cyprus Map"
              style={{ height: "12rem", objectFit: "cover" }}
            />
            <Card.Body className="text-center">
              <Card.Title style={{ fontSize: "1.2rem" }}>
                Interactive Map
              </Card.Title>
              <Card.Text style={{ fontSize: "0.9rem" }}>
                Explore Cyprus fishing spots via the interactive map.
              </Card.Text>
              <Link to="/interactive-map">
                <Button variant="primary">Go!</Button>
              </Link>
            </Card.Body>
          </div>

          <div
            className="card mx-auto"
            style={{ width: "18rem", height: "22rem" }}
          >
            <Card.Img
              variant="top"
              src={`${freeDiverImage}`}
              alt="freeDiver"
              style={{ height: "12rem", objectFit: "cover" }}
            />
            <Card.Body className="text-center">
              <Card.Title style={{ fontSize: "1.2rem" }}>
                Apnea Trainer
              </Card.Title>
              <Card.Text style={{ fontSize: "0.9rem" }}>
                Practice apnea from the comfort of your room with this awesome
                tool!
              </Card.Text>
              <Link to="/apnea-trainer">
                <Button variant="primary">Go!</Button>
              </Link>
            </Card.Body>
          </div>

          <div
            className="card mx-auto"
            style={{ width: "18rem", height: "22rem" }}
          >
            <Card.Img
              variant="top"
              src={`${sargosImage}`}
              alt="Sargos"
              style={{ height: "12rem", objectFit: "cover" }}
            />
            <Card.Body className="text-center">
              <Card.Title style={{ fontSize: "1.2rem" }}>
                Species Explorer
              </Card.Title>
              <Card.Text style={{ fontSize: "0.9rem" }}>
                Discover various species found in the Mediterranean!
              </Card.Text>
              <Link to="/species-explorer">
                <Button variant="primary">Go!</Button>
              </Link>
            </Card.Body>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default CardsComponent;

// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import cyprusImage from "../../assets/img/cyprus_map_card.jpg";
// import freeDiverImage from "../../assets/img/freediver.webp";
// import sargosImage from "../../assets/img/sargos_species.jpg";

// function CardsComponent() {
//   return (
//     <Container fluid>
//       <Row className="justify-content-center align-items-center">
//         <div className="d-flex flex-wrap justify-content-center">
//           <div className="card mx-5 my-2" style={{ width: "18rem", maxWidth: "100%" }}>
//             <Card.Img variant="top" src={`${cyprusImage}`} alt="Cyprus Map" style={{ height: "12rem", objectFit: "cover" }} />
//             <Card.Body className="text-center">
//               <Card.Title>Interactive Map</Card.Title>
//               <Card.Text>
//                 Find the interactive map of Cyprus where you can explore fishing spots based on inputs of other users.
//               </Card.Text>
//               <Button variant="primary">Go!</Button>
//             </Card.Body>
//           </div>

//           <div className="card mx-5 my-2" style={{ width: "18rem", maxWidth: "100%" }}>
//             <Card.Img variant="top" src={`${freeDiverImage}`} alt="freeDiver" style={{ height: "12rem", objectFit: "cover" }} />
//             <Card.Body className="text-center">
//               <Card.Title>Apnea Trainer</Card.Title>
//               <Card.Text>
//                 Practice on-land apnea training with this tool to enhance diving capabilities!
//               </Card.Text>
//               <Button variant="primary">Go!</Button>
//             </Card.Body>
//           </div>

//           <div className="card mx-5 my-2" style={{ width: "18rem", maxWidth: "100%" }}>
//             <Card.Img variant="top" src={`${sargosImage}`} alt="Sargos" style={{ height: "12rem", objectFit: "cover" }} />
//             <Card.Body className="text-center">
//               <Card.Title>Species Explorer</Card.Title>
//               <Card.Text>
//                 Explore various species and information found in the Mediterranean sea!
//               </Card.Text>
//               <Button variant="primary">Go!</Button>
//             </Card.Body>
//           </div>
//         </div>
//       </Row>
//     </Container>
//   );
// }

// export default CardsComponent;
