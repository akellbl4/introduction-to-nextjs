import Router, { useRouter } from 'next/router'

import capitalize from 'lib/capitalize'
import fetchAlbum from 'data/album'
import fetchAlbums from 'data/albums'
import fetchAlbumPhotos from 'data/photos'
import Photo from 'components/Photo'

export async function getStaticPaths() {
	const albums = await fetchAlbums()
	const paths = albums.map((a) => ({ params: { id: `${a.id}` } }))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps(ctx) {
	try {
		const album = await fetchAlbum(ctx.params.id)
		const photos = await fetchAlbumPhotos(album.id)

		return {
			props: { album, photos },
		}
	} catch (e) {
		if (e.status === 404) {
			return {
				notFound: true,
			}
		}

		throw e
	}
}

export default function Albums({ album, photos }) {
	const router = useRouter()

	return (
		<section>
			<h2>
				{capitalize(album.title)}{' '}
				<button onClick={() => Router.back()}>Back</button>
			</h2>
			{photos.map((p) => (
				<Photo key={p.id} {...p} />
			))}
		</section>
	)
}

Albums.title = 'Albums'
