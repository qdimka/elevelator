import React from "react";
// @ts-ignore
import styles from "./Title.module.css";
import {Col, Row, Space} from "antd";

interface ITitleProps {
    logo?: string
    title: string;
}

const Title = (props: ITitleProps) => (
    <div className={styles.title}>
        <div className={styles.title_logo}>{props.title}</div>
        <div className={styles.title_platform}>{process.platform}-{process.arch}</div>
    </div>
);

export default Title;