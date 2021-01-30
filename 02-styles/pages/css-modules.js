import Head from 'next/head'
import Link from 'next/link'

import styles from 'styles/css-modules.module.css'

export default function CssModules() {
	return (
		<main className={styles.container}>
			<Head>CSS Modules</Head>
			<header className={styles.header}>
				<h1 className={styles.logo}>CSS Modules</h1>
				<Link href="/">
					<a className={styles.linkToMain}>Back to main</a>
				</Link>
			</header>
			<article className={styles.article}>
				<p>
					Next.js supports{' '}
					<a href="https://github.com/css-modules/css-modules" target="_blank">
						CSS Modules
					</a>{' '}
					using the [name].module.css file naming convention.
				</p>
				<p>
					CSS Modules locally scope CSS by automatically creating a unique class
					name. This allows you to use the same CSS class name in different
					files without worrying about collisions.
				</p>
				<p>
					This behavior makes CSS Modules the ideal way to include
					component-level CSS. CSS Module files can be imported anywhere in your
					application.
				</p>
				<a
					className={styles.linkToSource}
					href="https://nextjs.org/docs/basic-features/built-in-css-support"
					target="_blank"
				>
					Source
				</a>
			</article>
			<footer className={styles.footer}>
				<ul className={styles.creds}>
					<li className={styles.credsItem}>
						<a
							className={styles.link}
							href="https://nextjs.org/"
							target="_blank"
						>
							Powered by Next.js
						</a>
					</li>
					<li className={styles.credsItem}>
						<a
							className={styles.link}
							href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fakellbl4%2Fintroduction-to-nextjs%2Ftree%2Fmain%2F02-styles"
							target="_blank"
						>
							Deploy with Vercel
						</a>
					</li>
				</ul>
				<div className={styles.author}>
					Author{' '}
					<a href="https://pavel.mineev.me" target="_blank">
						Pavel Mineev
					</a>
				</div>
			</footer>
		</main>
	)
}
