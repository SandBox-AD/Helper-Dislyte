import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../../components/Layout';
import ListCustom from '../../../components/ListCustom';
import ErrorCommon from '../../../components/common/ErrorCommon/ErrorCommon';

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:8080/api/esper/');
  const espers = await res.json();
  const paths = espers.data.map((esper) => ({
    params: { id: esper.id.toString() },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`http://localhost:8080/api/esper/${params.id}`);
    const esper = await res.json();
    if (!esper) {
      return { props: { status: false } };
    }
    return { props: { esper } };
  } catch (error) {
    return { props: { error } };
  }
}

export default class Esper extends React.Component {
  constructor(props) {
    super(props);
    this.state =  props;
  }
  
  render() {
    // const [open, setOpen] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const { user, error } = useUser();
    const { props } = this.state;
    let view;
    if (error)
      view = (
        <Layout>
          <ErrorCommon>{{ severity: 'error', message: error }}</ErrorCommon>
        </Layout>
      );
    if (!this.props)
      view = (
        <Layout>
          <ErrorCommon>
            {{ severity: 'error', message: 'Pas de donnée pour l&apos;esper' }}
          </ErrorCommon>
        </Layout>
      );
    if (props) {
      view = (
        <Layout>
          <ListCustom>{props}</ListCustom>
        </Layout>
      );
    }
    return view;
  }
}

Esper.propType = {
  props: PropTypes.arrayOf(PropTypes.arrayOf),
};
