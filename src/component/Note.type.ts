export interface INote {
    id: string;
    title: string;
    description:string;
}

export enum PageEnum {
    list,
    add,
    edit,
}