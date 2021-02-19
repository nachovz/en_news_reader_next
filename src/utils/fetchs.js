import client from 'utils/client';
import { routes } from 'data/constants';
import parseFilter from 'utils/parseFilter';

export async function fetchHome () {
console.log("Fetch", "home", 11)
	const posts = await client.posts().get({
    per_page: 11,
    ...parseFilter([routes['home'].value]),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  const portada = await client.posts().get({
    per_page: 1,
    ...parseFilter(['principal-portada']),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
	return [...portada, ...posts];
}

export async function fetchPostsByFilter(page=0, filter=[], per_page=10) {
	console.log("Fetch", page, filter, per_page)
	let posts = []
	if (filter[0] === 'ultima-hora'){
		posts = await fetchHome()
	} else {
		posts = await client.posts().get({
			per_page,
			offset: page,
			...parseFilter(filter),
			_fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
			_embed: 1,
		});
	}
  return posts;
};