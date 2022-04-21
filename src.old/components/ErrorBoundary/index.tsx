import { Component, ErrorInfo } from 'react';

import { Props, State } from '../../types/errorBoundary.type';

class ErrorBoundary extends Component<Props, State> {
  public state: State ={
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true};
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Uncaught Error: ", error, errorInfo);
  };

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry... there was an error</h1>
    };

    return this.props.children;
  };
};

export default ErrorBoundary;