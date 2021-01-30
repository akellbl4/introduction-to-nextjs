import { Fragment } from 'react'
import styles from './Repo.module.css'

export default function Repo({ description, license, tags }) {
	const tagsLength = tags?.length
	return (
		<div className={styles.root}>
			<p>
				<b>About:</b> {description}
			</p>
			{license && (
				<p>
					<b>License:</b>{' '}
					<a href={license.url} target="_blank">
						{license.name}
					</a>
				</p>
			)}
			{tagsLength && tagsLength > 0 && (
				<p>
					<b>Tags:</b>{' '}
					{tags.map(({ name }, i) => (
						<Fragment key={name}>
							<span>{name}</span>
							{i < tagsLength && ', '}
						</Fragment>
					))}
				</p>
			)}
		</div>
	)
}
