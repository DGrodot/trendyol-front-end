import {Card, Image} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../contex/GlobalState";


export const Sticker = ({employee, showTeamName, showPicture}) => {
    const {openedPeople} = useContext(GlobalContext);
    const {firstName, position, experience, teamName} = employee;

    const [picture, setPicture] = useState("blank_image.png");

    useEffect(() => {
        if (showPicture || openedPeople.some(people => people['id'] === employee['id'])) {
            setPicture(employee["picture"]);
        }
    }, [openedPeople, showPicture, employee]);

    return (
        <Card className="m-3 px-1" style={{width: '18rem'}}>
            <Image src={require(`../../assets/128x128/${picture}`)} width="220px" alt="Person"
                   className="mt-2 mx-auto img-fluid"/>
            <Card.Body>
                <Card.Title>{firstName}</Card.Title>
                {showTeamName && <Card.Subtitle className="mb-2 text-muted">{teamName}</Card.Subtitle>}
                <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{experience}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}