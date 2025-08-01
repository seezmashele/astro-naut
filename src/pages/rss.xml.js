import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_DESCRIPTION, SITE_TITLE } from '../utils/constants'

export async function GET(context) {
  const posts = await getCollection('posts')
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.id}/`
    }))
  })
}
