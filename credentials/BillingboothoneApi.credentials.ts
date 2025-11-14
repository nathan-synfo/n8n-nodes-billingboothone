import {
	ICredentialType,
	INodeProperties,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class BillingboothoneApi implements ICredentialType {
	name = 'billingboothoneApi';
	displayName = 'Billing Booth One API';
	documentationUrl = 'https://api.billingbooth.app/docs';
	icon = 'file:billingboothone.svg' as const;

	properties: INodeProperties[] = [
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'user@example.com',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.billingbooth.app',
			required: true,
			placeholder: 'https://api.billingbooth.app',
		},
	];

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/token',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				email: '={{$credentials.email}}',
				password: '={{$credentials.password}}',
				grant_type: 'password',
			},
			json: true,
		},
	};
}