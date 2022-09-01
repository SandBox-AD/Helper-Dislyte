import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   console.log({ error, errorInfo });
  // }

  render() {
    const { hasError } = this.state;
    // Check if the error is thrown
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Return children components in case of no error

    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
