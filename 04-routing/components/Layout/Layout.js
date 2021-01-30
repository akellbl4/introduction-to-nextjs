import Head from 'next/head'
import Link from 'next/link'

import styles from './Layout.module.css'

export default function Home({ title, children }) {
	return (
		<main className={styles.container}>
			<Head>{title}</Head>
			<header className={styles.header}>
				<h1>{title}</h1>
				<nav className={styles.nav}>
					<Link href="/">
						<a className={styles.navLink}>Home</a>
					</Link>
					<Link href="/albums">
						<a className={styles.navLink}>Albums</a>
					</Link>
				</nav>
			</header>
			{children}
			<footer className={styles.footer}>
				<ul className={styles.creds}>
					<li className={styles.credsItem}>
						<a
							className={styles.credsLink}
							href="https://nextjs.org/"
							target="_blank"
						>
							Powered by Next.js
						</a>
					</li>
					<li className={styles.credsItem}>
						<a
							className={styles.credsLink}
							href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fakellbl4%2Fintroduction-to-nextjs%2Ftree%2Fmain%2F04-routing"
							target="_blank"
						>
							Deploy with Vercel
						</a>
					</li>
				</ul>
				<div className={styles.author}>
					Author{' '}
					<a
						className={styles.authorLink}
						href="https://pavel.mineev.me"
						target="_blank"
					>
						Pavel Mineev
					</a>
				</div>
			</footer>
		</main>
	)
}

function isActive() {}
