import {Button, Card, Container} from "react-bootstrap";

export const StickerSet = ({openModalEmployees}) => {

    return (
        <>
            <Container>
                <Card className='mt-3 mx-auto' bg='light' style={{width: '300px', height: '400px'}}>
                    <Card.Body className='d-flex flex-column justify-content-evenly'>
                        <div>
                            <Card.Title className="mx-auto text-end display-3 fw-bold">trendyo</Card.Title>
                            <Card.Subtitle
                                className="mx-auto text-end display-4 fw-bolder text-danger">tech</Card.Subtitle>
                        </div>
                        <Button variant="dark" size="lg" className="mx-auto fs-4 fst-italic" onClick={openModalEmployees}>OPEN</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}