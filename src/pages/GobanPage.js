import Layout from './Layout';
import Goban from '../components/Goban';


const GobanPage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const size = queryParams.get('size') || 19;

    return (
        <Layout pageTitle="Goban">
            <Goban size={size} />
            <div style={{height: '400px'}}>
            </div>
        </Layout>
    );
};

export default GobanPage;
