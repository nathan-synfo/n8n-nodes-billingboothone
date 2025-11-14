import { ICredentialType, INodeProperties, ICredentialTestRequest } from 'n8n-workflow';
export declare class BillingboothoneApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    icon: "file:billingboothone.svg";
    properties: INodeProperties[];
    test: ICredentialTestRequest;
}
