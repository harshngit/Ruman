import { getpostBlogs } from '../app/sanityFunction'
export default async function sitemap() {
	// const blog = await getpostBlogs()

	// const blogEntries = blog.map((post) => ({
	// 	url: `https://rumanaccounting.com/blog/blog-detail-one/${post?.slug}`,
	// 	changeFrequency: 'weekly',
	// 	priority: 0.8,
	// }));
	return [
		{
			url: 'https://rumanaccounting.com/',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://rumanaccounting.com/about/',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://rumanaccounting.com/service/',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/service/service-two/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: 'https://rumanaccounting.com/service/service-asscoiate/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/contact/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/career/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/accountIntelligence/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/service/service-detail/online-accounting-and-book-keeping/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/service/service-detail/accounting-for-start-ups/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/service/service-detail/implementation-of-accounting-system-/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/service/service-detail/tax-services/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/service/service-detail/mis/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://rumanaccounting.com/service/service-detail/e-commerce-accounting/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://rumanaccounting.com/blog/blog-grid',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://rumanaccounting.com/blog/blog-grid',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://rumanaccounting.com/blog/blog-detail-one/accounting-intelligencehow-smart-financial-tools-are-revolutionizing-small-businesses',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://rumanaccounting.com/blog/blog-detail-one/accounting-intelligencehow-smart-financial-tools-are-revolutionizing-small-businesses',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://rumanaccounting.com/blog/blog-detail-one/why-small-businesses-need-professional-accounting-services-content',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		// ...blogEntries
	]
}
