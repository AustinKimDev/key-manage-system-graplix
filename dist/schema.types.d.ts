export type User = {
    id: number;
    account: string;
    name: string;
};
export type Key = {
    id: number;
    content: string;
    parent_id: number;
};
export type Application = {
    id: number;
    name: string;
    parent_id: number;
};
export type Company = {
    id: number;
    name: string;
    parent_id: number;
};
export type System = {
    name: string;
    admin_id: number;
};
export type MyTypeMap = {
    System: System;
    Company: Company;
    Application: Application;
    Key: Key;
    User: User;
};
