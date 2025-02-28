export default {
	name: 'blog',
	title: 'Blog',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name', // ✅ Auto-generate from name
				slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
			}
		},
		{
			name: 'details',
			title: 'Details',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'Heading 1', value: 'h1' },
						{ title: 'Heading 2', value: 'h2' },
						{ title: 'Heading 3', value: 'h3' }
					],
					marks: {
						decorators: [
							{ title: 'Bold', value: 'strong' },
							{ title: 'Italic', value: 'em' },
							{ title: 'Underline', value: 'underline' }
						]
					}
				}
			]
		},
		{
			name: 'date',
			title: 'Date',
			type: 'date'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image', // ✅ Change to 'image' instead of 'file' for Sanity's built-in image handling
			options: {
				hotspot: true
			}
		},
		{
			name: 'bannerimg',
			title: 'Banner Image',
			type: 'image',
			options: {
				hotspot: true
			}
		}
	]
};
