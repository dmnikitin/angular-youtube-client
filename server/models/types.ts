import { IUserDocument } from './interfaces';
export type createTokenFn = (login: string, id: string) => Promise<string>;
export type checkPasswordFn = (provided: string, original: string) => Promise<boolean>;
export type checkRegistrationFn = (login: string) => Promise<IUserDocument>;
export type createUserFn = (data: { login: string, password: string }) => Promise<IUserDocument>;
export type toResponseFn = (user: { _id: string, login: string, password: string }) => IUserDocument;
