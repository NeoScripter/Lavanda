import { Component, ComponentChildren } from 'preact';

type ErrorBoundaryState = {
    hasError: boolean;
    error: Error | null;
    retryKey: number;
};

type FallbackProps = {
    error: Error | null;
    onRetry: () => void;
};

type ErrorBoundaryProps = {
    children: ComponentChildren;
    fallback: (props: FallbackProps) => ComponentChildren;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        hasError: false,
        error: null,
        retryKey: 0,
    };

    static getDerivedStateFromError(error: Error) {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, info: { componentStack?: string }) {
        console.error('Error:', error.message);
        console.error('Component stack:', info.componentStack);
    }

    handleRetry = () => {
        this.setState((prev) => ({
            hasError: false,
            error: null,
            retryKey: prev.retryKey + 1,
        }));
    };

    render() {
        const { hasError, error, retryKey } = this.state;
        const { fallback: Fallback, children } = this.props;

        if (hasError) {
            return (
                <Fallback
                    error={error}
                    onRetry={this.handleRetry}
                />
            );
        }

        return <div key={retryKey}>{children}</div>;
    }
}

export default ErrorBoundary;
