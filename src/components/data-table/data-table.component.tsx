import * as React from "react";
import './data-table.css';
import { DataTableProps } from "./data-table.props";
import { Column } from "../../common";

export class DataTable extends React.Component<DataTableProps, {}> {

    constructor(props: DataTableProps) {
        super(props);
    }

    render() {
        return(
            <table>
                {this.renderHeader(this.props.columns)}
                {this.renderBody(this.props.columns,this.props.rows)}
            </table>
    )}

    renderHeader(columns: Column<any>[]) {
        return (
            <thead>
                <tr>
                    { columns.map((c,index)=>(<th>{c.headerRender()}</th>))}
                </tr>
            </thead>);
    }

    renderBody(columns: Column<any>[], rows: any[]) {
        return (
            <tbody>
                { rows.map((row,index)=>(
                    <tr>
                        { columns.map(column=><td>{column.rowRender(row)}</td>) }
                    </tr>)) 
                }
            </tbody>
        )
    }

}