import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, Route, Routes } from "react-router-dom";
import {
    DebugComponentList,
    DebugState
} from "pages";

export function DebugMenuAndPaths() {

    const menuItems = [
        { name: "State", to: "/debug/state" },
        { name: "Component List", to: "/debug/components" },
    ]

    return (<>
        <Menu>
            {menuItems.map(itm => (<Menu.Item key={itm.name} as={Link} to={itm.to} content={itm.name} />))}
        </Menu>
        <Routes>
            <Route path="/components" element={<DebugComponentList />} />
            <Route path="/state" element={<DebugState />} />
        </Routes>
    </>)
}