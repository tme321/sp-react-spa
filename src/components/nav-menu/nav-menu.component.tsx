import * as React from 'react';
import './nav-menu.css';
import { Link } from "react-router-dom";
import { NavMenuProps } from "./nav-menu.props";

export class NavMenu extends React.Component<NavMenuProps,{}> {
    constructor(props: NavMenuProps) {
        super(props);
    }

    render() {
        return (
            <div className="nav-menu">
                <label className="brand">
                    { this.props.brand }
                </label>
                <nav className="items">
                    <Link to="/">Home</Link>
                    <Link to="/playersStats">Players Stats</Link>
                </nav>
            </div>
        );
    }
}
