import PropTypes from 'prop-types';

function Error(statusCode) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occured on server`
        : 'An error occured on client'}
    </p>
  );
}
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err;
  return { statusCode };
};

export default Error;

Error.propsType = {
  statusCode: PropTypes.number.isRequired,
};
