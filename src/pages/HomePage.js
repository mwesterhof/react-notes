import Layout from './Layout';

import PointerList from '../components/PointerList'
import Pointer from '../components/Pointer'


const HomePage = () => {
    return (
        <Layout pageTitle="Home">
            <PointerList>
                <Pointer>first pointer</Pointer>
                <Pointer>second pointer</Pointer>
            </PointerList>
        </Layout>
    );
};

export default HomePage;
