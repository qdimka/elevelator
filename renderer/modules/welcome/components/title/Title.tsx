import React from "react";
// @ts-ignore
import styles from "./Title.module.css";
import {Col, Row} from "antd";

const Title = () => (
    <div className={styles.title}>
        <Row>
            <Col span={12} offset={6}><div className={styles.title_logo}>ELEVELATOR</div></Col>
        </Row>
        <Row>
            <Col span={12} offset={6}><div className={styles.title_platform}>{process.platform}-{process.arch}</div></Col>
        </Row>
    </div>
);

export default Title;