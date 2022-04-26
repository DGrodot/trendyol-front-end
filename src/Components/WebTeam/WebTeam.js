import {Card, Col, Container, Row} from "react-bootstrap";
import teamLogo1 from "../../assets/Gladiators.png";
import {useContext} from "react";
import {GlobalContext} from "../../contex/GlobalState";
import {useParams} from "react-router-dom";
import {Sticker} from "../Sticker";

export const WebTeam = () => {
    const {allTeams} = useContext(GlobalContext);
    const {_id} = useParams();
    const team = allTeams.find(team => team._id === _id);
    const {department, teamName, teamDescription, teamSlogan, employees} = team;


    return (
        <Container>
            <Row>
                <Col>
                    <img src={teamLogo1} width="400" alt="Team logo" className="mt-2 mx-auto"/>
                </Col>
                <Col>
                    <Card className="mt-2 mx-auto" style={{height: "400px"}}>
                        <Card.Body>
                            <Card.Title>{department}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{teamName}</Card.Subtitle>
                            <Card.Text>{teamSlogan}</Card.Text>
                            <Card.Text>{teamDescription}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                {employees.length > 0 && employees.map(employee => {
                    return (
                        <Col className="col-4 m-3 mx-auto">
                            <Sticker employee={employee} showTeamName={false}/>
                        </Col>
                    )
                })}
            </Row>

        </Container>
    )
}