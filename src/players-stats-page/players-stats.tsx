import * as React from 'react';
import './players-stats.css';
import { Link } from "react-router-dom";
import { Route } from "react-router";
import { PlayersStatsProps } from "./players-stats.props";
import { PlayersInfo } from "./players-info";

export class PlayersStatsNav extends React.Component<PlayersStatsProps,{}> {
    constructor(props: PlayersStatsProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="nav"><Link to={ this.props.match.url + "/info"}>Players Info</Link></nav>
                <Route path={ this.props.match.url + "/info"} component={PlayersInfo}/>
            </div>
        );
    }
}
