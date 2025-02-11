export default {
	name: 'career',
	title: 'career',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string'
		},
		{
			name: 'position',
			title: 'Position',
			type: 'string'
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string'
		},
		{
			name: 'message',
			title: 'Message',
			type: 'string'
		},
		{
			name: 'resume',
			title: 'Resume',
			type: 'file',
			options: {
				storeOriginalFilename: true
			}
		}
	]
}