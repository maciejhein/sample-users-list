import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }
  // TODO we need to create custom component Error
  render() {
    const { error, errorInfo, hasError } = this.state;

    if (hasError) {
      return (
        <div>
          <span>{error.toString()}</span>
          <span>{errorInfo.componentStack}</span>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
