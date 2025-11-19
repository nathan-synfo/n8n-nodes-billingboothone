import { ILoadOptionsFunctions } from 'n8n-workflow';
export interface AuthenticatedContext {
    baseUrl: string;
    accessToken: string;
    helpers: ILoadOptionsFunctions['helpers'];
}
export declare function getAuthenticatedContext(context: ILoadOptionsFunctions): Promise<AuthenticatedContext>;
