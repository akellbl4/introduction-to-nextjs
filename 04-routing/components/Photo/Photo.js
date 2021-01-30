import Image from 'next/image'

import capitalize from 'lib/capitalize'

import styles from './Photo.module.css'

export default function Photo({ url, thumbnailUrl, title }) {
	return (
		<a href={url} target="_blank" className={styles.root}>
			<figure className={styles.figure}>
				<Image src={thumbnailUrl} height={100} width={100} />
				<figcaption className={styles.caption}>{capitalize(title)}</figcaption>
			</figure>
		</a>
	)
}
