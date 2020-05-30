import * as React from "react";
import {Button, Layout, Space} from "antd";
import Sidebar from "./components/sidebar/Sidebar";
import Title from "./components/title/Title";
// @ts-ignore
import styles from "./View.module.css";

const {Content} = Layout;

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
            <Layout style={{height: "100vh"}}>
                { this.props.history && <Sidebar mode="light" items={this.props.history}/> }
                <Layout>
                    <Content className={styles.content}>
                        <Space direction="vertical" align="center" size={36}>
                            <Title title="ELEVELATOR"/>
                            <Button type="primary">Open database</Button>
                        </Space>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default WelcomeView;