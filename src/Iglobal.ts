export default interface IFetchData {
    "HTTPS": boolean;
    [key: number]: string | number
}
export default interface IRepoData {
    count: number
    entries: Array<IFetchData | undefined>
}