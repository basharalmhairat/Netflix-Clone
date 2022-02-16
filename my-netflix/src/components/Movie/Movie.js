import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';

function Movie({ mov }) {

    const [cardInfo, setCardInfo] = useState({});
    const [show, setshow] = useState(false);

    const handleClose = () => {
        setshow (false);
    }


    return (
        <>
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path} `}/>
                <Card.Body>
                    <Card.Title> {mov.Title}</Card.Title>
                    <Card.Text>
                        {mov.overview}
                    </Card.Text>
                    <div>
                        <Button className='div-card-button' variant="primary"
                            onClick={() => {
                                setCardInfo(mov)
                                setshow(true);
                            }}>Add To Favorite</Button>
                    </div>
                </Card.Body>
            </Card>
            {
                <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }

        </>
    )
}
export default Movie;