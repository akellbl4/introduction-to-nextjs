import Head from 'next/head'
import Link from 'next/link'

import styles from 'styles/css-modules.module.css'

export default function CssModules() {
	return (
		<main className={styles.container}>
			<Head>Bootstrap</Head>
			<header className={styles.header}>
				<h1 className={styles.logo}>Bootstrap</h1>
				<Link href="/">
					<a className={styles.linkToMain}>Back to main</a>
				</Link>
			</header>
			<article className={styles.article}>
				<figure>
					<blockquote class="blockquote">
						<p>
							Quickly design and customize responsive mobile-first sites with
							Bootstrap, the world’s most popular front-end open source toolkit,
							featuring Sass variables and mixins, responsive grid system,
							extensive prebuilt components, and powerful JavaScript plugins.
						</p>
					</blockquote>
					<figcaption class="blockquote-footer">
						<a
							className={styles.linkToSource}
							href="https://getbootstrap.com/"
							target="_blank"
						>
							Bootstrap website
						</a>
					</figcaption>
				</figure>
				<h3>Examples</h3>
				<hr />
				<h4>Alert</h4>
				<div class="alert alert-primary" role="alert">
					A simple primary alert—check it out!
				</div>
				<pre className="highlight">
					<code>{ALERT_EXAMPLE}</code>
				</pre>
				<h4>Buttons</h4>
				<div>
					<button type="button" class="btn btn-primary">
						Primary
					</button>
					<button type="button" class="btn btn-secondary">
						Secondary
					</button>
					<button type="button" class="btn btn-success">
						Success
					</button>
					<button type="button" class="btn btn-danger">
						Danger
					</button>
					<button type="button" class="btn btn-warning">
						Warning
					</button>
				</div>
				<pre className="highlight">
					<code>{ALERT_EXAMPLE}</code>
				</pre>
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

const ALERT_EXAMPLE = `<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>`
