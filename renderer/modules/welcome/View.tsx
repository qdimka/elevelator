import * as React from "react";

interface WelcomeViewProps {
    requestHistory: () => void,
    history: any[]
}

class WelcomeView extends React.Component<WelcomeViewProps> {
    componentDidMount(): void {
        this.props.requestHistory();
    }

    render(): JSX.Element {
        return (
            <div>Welcome to Elevelator</div>
        )
    }
}

export default WelcomeView;