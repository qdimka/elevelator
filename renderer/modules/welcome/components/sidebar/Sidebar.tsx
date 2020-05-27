import * as React from "react";
import {Layout, Menu} from "antd";
// @ts-ignore
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

interface ISideBarProps {
    mode: "light" | "dark";
    items: any[];
}

const Sidebar = (props: ISideBarProps) => {
    const items = props.items.map((connection, index) => (
        <Menu.Item key={index}>
            <SidebarItem path={connection.path}/>
        </Menu.Item>
    ))

    return (
        <Layout.Sider className={styles.sidebar}>
            <Menu theme="dark" mode="inline">
                {items}
            </Menu>
        </Layout.Sider>
    )
}

export default Sidebar;