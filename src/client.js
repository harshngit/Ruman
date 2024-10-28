import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
	projectId: "s5a7njq1",
	dataset: 'production',
	apiVersion: '2022-03-07',
	userCdn: true,
	token: "skVHlrikeu9upjJ5IuGgIT84OGGfnhSn81o3fbqFCWPUih1xkmTqLqig4Ye1ugni3ys4FOBh359A4PDqQInVT0TzzP9fotXsbswFhnTlGXutkJbqxiDYIWdR58eZfnOr1rR40kAAHlTfNW1eGuT0qSFThGEThM5vwO2OkVvgikIONNN3IpQd"

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);