import React, {useContext} from "react";
import {GlobalContext} from "../../contex/GlobalState";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

export const TeamsPage = () => {
    const {allTeams} = useContext(GlobalContext);

    return (
        <Container>
            <h1>Teams</h1>
            <Row>
                {allTeams.map(team => (
                    <Col key={team._id} className="col-3 m-3 mx-auto">
                        <Link to={`${team._id}`} key={team._id}
                              className='text-decoration-none text-dark'>{team.teamName}</Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}