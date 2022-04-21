import { Component, ErrorInfo } from 'react';

import { Props, State } from '../../types/errorBoundary.types'

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true};
    };

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught Error: ", error, errorInfo);
    };

    public render() {
        if (this.state.hasError) {
            return <h1>Sorry... There was an error</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;