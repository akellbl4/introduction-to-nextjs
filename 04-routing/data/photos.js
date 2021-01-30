import fetcher from 'lib/fetcher'

export default function fetchAlbumPhotos(albumId) {
	return fetcher(
		`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
	)
}
