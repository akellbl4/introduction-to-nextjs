import fetchAlbums from 'data/albums'
import AlbumsList from 'components/AlbumsList'

export async function getStaticProps() {
	const albums = await fetchAlbums()

	return {
		props: { albums },
	}
}

export default function Albums({ albums }) {
	return (
		<section>
			<AlbumsList items={albums} />
		</section>
	)
}
