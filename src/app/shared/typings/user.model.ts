import { Account } from "./account.model";

export interface User extends Account{
    cpf: string;
    name: string;
    status: string;
    account: Account;
}