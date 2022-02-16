import { Container, Row } from 'react-bootstrap';
import Movie from '../Movie/Movie';
function MovieList({ data }) {
    return (

        <>
            <Container className='div-container'>
                <Row md={3}>
                    {

                        data.length && data.map((mov) =>(
                            <Movie mov={mov} />
                        ))
                    }

                    {
                        !data.length && <div> <h2> no such result</h2></div>
                    }
                </Row>
            </Container>
        </>


    )
}
export default MovieList