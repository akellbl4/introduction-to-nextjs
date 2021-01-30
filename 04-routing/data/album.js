import fetcher from 'lib/fetcher'

export default function fetchAlbums(id) {
	return fetcher(`https://jsonplaceholder.typicode.com/albums/${id}`)
}
