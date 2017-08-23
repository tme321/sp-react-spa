export interface Column<T> {
    headerRender: ()=>JSX.Element;
    rowRender: (row: T)=>JSX.Element;
}
