export function getRowData(path: string, row: any) {
    console.log(path);
    return path
        .split('.')
        .reduce((acc,curr)=>acc[curr] || '', row);
}
