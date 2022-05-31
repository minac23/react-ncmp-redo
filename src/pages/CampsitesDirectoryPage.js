import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
   
    const [ campsiteId, setCampsiteId ] = useState(0);
    const selectCampsite = selectCampsiteById(campsiteId); // CampsiteDetail expects an object an not only its id. Not hooked, instead set value to campsite object returned from calling selectCampsiteById(campsiteId) -- campsiteId is hooked

    return (
        <Container>
            
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col sm='7' md ='5'>
                    <CampsiteDetail campsite = {selectCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;