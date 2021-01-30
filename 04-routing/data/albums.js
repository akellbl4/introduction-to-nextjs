import fetcher from 'lib/fetcher'

export default function fetchAlbums() {
	return fetcher('https://jsonplaceholder.typicode.com/albums')
}
