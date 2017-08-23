import { AppProps, Column } from "../../common";

export interface DataTableProps extends AppProps {
    columns: Column<any>[];
    rows: any[];
}
