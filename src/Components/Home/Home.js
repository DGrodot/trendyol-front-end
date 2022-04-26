import {useContext, useEffect, useState} from "react";
import {Button, Card, Container, Modal} from "react-bootstrap";
import {StickerSet} from "../StickerSet";
import {Sticker} from "../Sticker";
import {GlobalContext} from "../../contex/GlobalState";


export const Home = () => {
    const {allTeams, openedPeople, addPeople} = useContext(GlobalContext);
    const currentDate = new Date().getDate();
    const storageDate = JSON.parse(localStorage.getItem('storageDate'));

    const [showModal, setShow] = useState(false);
    const [showModalEmployees, setShowModalEmployees] = useState(false);
    const [employeesForStickerSet, setEmployeesForStickerSet] = useState([]);
    const [amountOfStickerSet, setAmountOfStickerSet] = useState(JSON.parse(localStorage.getItem('amountOfStickerSet')) || []);

    useEffect(() => {
        if (!storageDate || storageDate !== currentDate) {
            setAmountOfStickerSet([1, 2, 3]);
        }
    }, [currentDate, storageDate]);

    useEffect(() => {
        localStorage.setItem('storageDate', JSON.stringify(currentDate));
        localStorage.setItem('amountOfStickerSet', JSON.stringify(amountOfStickerSet));
    }, [amountOfStickerSet, currentDate]);



    const getRandomStickers = () => {
        const randomTeam = allTeams[Math.floor(Math.random() * allTeams.length)];
        const setOfRandomEmployees = new Set();
        for (let i = 0; i < randomTeam['employees'].length; i++) {
            if (openedPeople.every(people => people.id !== randomTeam['employees'][i]['id'])) {
                randomTeam['employees'][i]['teamName'] = randomTeam['teamName'];
                if (setOfRandomEmployees.size < 6) {
                    setOfRandomEmployees.add(randomTeam['employees'][i]);
                }
            }
        }
        setEmployeesForStickerSet([...setOfRandomEmployees]);
    }

    const handleClose = () => setShow(false);

    const getDailyStickers = () => {
        setShow(true);
        getRandomStickers();
    };

    const openModalEmployees = () => {
        setShow(false);
        setShowModalEmployees(true);
    };

    const handleCloseModalEmployees = () => setShowModalEmployees(false);

    const handleAddEmployees = () => {
        setShowModalEmployees(false);

        if (amountOfStickerSet && amountOfStickerSet.length === 0) return;

        employeesForStickerSet.forEach(employee => addPeople(employee));
        setAmountOfStickerSet(prev => [...prev].filter((element, index) => index < [...prev].length - 1));
    };


    return (
        <>
            <Container>
                <Card className='mt-5 mx-auto' style={{width: '90%', height: '80vh'}} bg='light'>
                    <Card.Body className='d-flex flex-column justify-content-evenly'>
                        <div>
                            <Card.Title className="mx-auto w-50 text-end display-1 fw-bold">trendyo</Card.Title>
                            <Card.Subtitle
                                className="mx-auto w-50 text-end display-2 fw-bolder text-danger">tech</Card.Subtitle>
                        </div>
                        <Card.Subtitle className="mx-auto fs-3 fst-italic fw-bolder">Sticker Album</Card.Subtitle>
                        <Button variant="dark" size="lg" className="mx-auto fs-4 fst-italic" onClick={getDailyStickers}>Get
                            your daily sticker</Button>
                    </Card.Body>
                </Card>

                <Modal show={showModal} onHide={handleClose} size={'xl'}>
                    <Modal.Header className="mx-auto fs-3 fst-italic fw-bolder border-0">
                        <Modal.Title>
                            <p className="text-center">DAILY STICKER SETS</p>
                            <p className="text-center">{`YOU HAVE ${amountOfStickerSet.length} STICKER SETS TO OPEN`}</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={'d-flex flex-row'}>
                        {amountOfStickerSet.map(i => <StickerSet openModalEmployees={openModalEmployees} key={i}/>)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showModalEmployees} onHide={handleCloseModalEmployees} size={'xl'}>
                    <Modal.Header className="mx-auto fs-3 fst-italic fw-bolder border-0">
                        <Modal.Title>
                            <p className="text-center">STICKER SET HAS OPENED</p>
                            <p className="text-center">{`YOU HAVE ${employeesForStickerSet.length} NEW STICKER`}</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={'d-flex flex-row'}>
                        {employeesForStickerSet.map(employee => (
                                <Sticker employee={employee} showTeamName={true} showPicture={true} key={employee.id}/>
                            )
                        )}
                    </Modal.Body>
                    <Modal.Footer className="mx-auto">
                        <Button variant="secondary" onClick={handleAddEmployees}>
                            PASTE TO YOUR ALBUM
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

