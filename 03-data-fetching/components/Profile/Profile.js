import Image from 'next/image'
import styles from './Profile.module.css'

export default function Profile({ avatar_url, login, name, bio, ...props }) {
	console.log(props)
	return (
		<div className={styles.root}>
			<div className={styles.avatar}>
				<Image src={avatar_url} width={200} height={200} />
			</div>
			<h4 className={styles.name}>{name}</h4>
			<span className={styles.login}>{login}</span>
			<p>{bio}</p>
		</div>
	)
}
