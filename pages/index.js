import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/home/Title';
import Use from '../components/home/Use';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
    render() {
        return (
            <Layout>
                <Title />
                <Use />
            </Layout>
        );
    }
}

export default Home;
