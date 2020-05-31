import { IUser } from './interfaces';
export type createTokenFn = (login: string, id: string) => Promise<string>;
export type checkPasswordFn = (provided: string, original: string) => Promise<boolean>;
export type checkRegistrationFn = (login: string) => Promise<IUser>;
export type createUserFn = (data: { login: string, password: string }) => Promise<IUser>;
