import Link from 'next/link'

import capitalize from 'lib/capitalize'

import styles from './AlbumsList.module.css'

export default function AlbumsList({ items = [] }) {
	return (
		<ul className={styles.root}>
			{items.map((p) => (
				<li key={p.id} className={styles.item}>
					<Link href={`/albums/${p.id}`}>
						<a className={styles.link}>{capitalize(p.title)}</a>
					</Link>{' '}
					<Link href={`/AlbumsList/${p.name}/ssr`}>
						<a className={styles.ssrLink}>SSR</a>
					</Link>
				</li>
			))}
		</ul>
	)
}
