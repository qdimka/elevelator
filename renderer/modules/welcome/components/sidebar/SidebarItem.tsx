import React, {Component} from "react";

interface ISidebarItemProps {
    path: string,
}

const SidebarItem = (props: ISidebarItemProps) => (
    <div>
        <div>{props.path}</div>
    </div>
);

export default SidebarItem;