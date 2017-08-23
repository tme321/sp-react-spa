import * as React from "react";
import { Column, PlayerResult } from "../../common";

export const playersInfoColumns: Column<PlayerResult>[] = [
    {
        headerRender: ()=>(<label>Name</label>),
        rowRender: (row)=>(<span>{row.Player.first_name} {row.Player.last_name}</span>),
    }, 
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.positions.name}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.team.name}</span>),
    },
    {
        headerRender: ()=>(<label>Height</label>),
        rowRender: (row)=>(<span>{row.Player.height}</span>),
    },
    {
        headerRender: ()=>(<label>Weight</label>),
        rowRender: (row)=>(<span>{row.Player.weight}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.college.name}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.college_division.name}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.draft_position}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.bench_weight}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.broad_jump}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.cone_time}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.forty_time}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.shuttle_time}</span>),
    },
    {
        headerRender: ()=>(<label>Bench Weight</label>),
        rowRender: (row)=>(<span>{row.Player.vertical_jump}</span>),
    }
];