import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
   
    // const [ campsiteId, setCampsiteId ] = useState(0);
    // const selectCampsite = selectCampsiteById(campsiteId); // CampsiteDetail expects an object an not only its id. Not hooked, instead set value to campsite object returned from calling selectCampsiteById(campsiteId) -- campsiteId is hooked

    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;