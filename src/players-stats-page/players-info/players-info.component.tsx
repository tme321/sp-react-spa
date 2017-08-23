import * as React from "react";
import './players-info.css';
import { PlayersInfoProps } from "./players-info.props";
import { DataTable } from "../../components";
import { playersInfoColumns } from "./players-info.columns";
import { Observable } from 'rxjs/Observable';
import { PlayersResponse } from "../../common";
import { PlayersInfoState } from "./players-info.state";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';

export class PlayersInfo extends React.Component<PlayersInfoProps, PlayersInfoState> {
    constructor(props: PlayersInfoProps){
        super(props);
        this.state = {rows: []};
        this.loadData();
    }

    render() {
        return (
            <div>
                <h1>Players Info</h1>
                <DataTable columns={playersInfoColumns} rows={this.state.rows}/>
            </div>
        );
    }

    loadData() {
        Observable.fromPromise(fetch('http://api.sportsporch.com/players'))
            .flatMap(resp=>resp.json())
            .subscribe((resp:PlayersResponse)=>
                {
                    console.log(resp);
                    this.setState({rows: resp.results})
                });
    }
}