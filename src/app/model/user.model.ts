export interface IUser {
    id: number,
    name: string,
    address: string,
    mainMember: string,
    avatar: string,
    gender: string,
    selected: boolean;
}
export interface IUserSelectHead{
    mainMember: string,
    countMember: number
}