export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    full_name: string;
    height: string;
    weight: string;
    year_started: string;
    forty_time: string;
    shuttle_time: string;
    bench_weight: string;
    vertical_jump: string;
    broad_jump: string;
    cone_time: string;
    draft_position: string;
    team: TeamRef;
    college: CollegeRef;
    college_division: CollegeDivisionRef;
    positions: PositionRef;
}

export interface TeamRef {
    id: number;
    name: string;
}

export interface CollegeRef {
    id: number;
    name: string;
}

export interface CollegeDivisionRef {
    id: number;
    name: string;
}

export interface PositionRef {
    id: number;
    name: string;
}

