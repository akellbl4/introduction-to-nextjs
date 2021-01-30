import Head from 'next/head'
import Link from 'next/link'

export default function CssModules() {
	return (
		<main className="container">
			<Head>CSS-in-JS</Head>
			<header className="header">
				<h1 className="logo">CSS-in-JS</h1>
				<Link href="/">
					<a className="link linkToMain">Back to main</a>
				</Link>
			</header>
			<article className="article">
				<p>
					You can use built-in <code>styles-jsx</code> for styling your
					application.
				</p>
				<p>
					Styled-jsx is full, scoped and component-friendly CSS support for JSX
					(rendered on the server or the client).
				</p>
				<p>Also, you can add support of scss of postcss into it.</p>
				<ul>
					<li>
						<a
							href="https://github.com/vercel/next.js/tree/canary/examples/with-styled-jsx-scss"
							target="_blank"
						>
							Example with SCSS
						</a>
					</li>
					<li>
						<a
							href="https://github.com/vercel/next.js/tree/master/examples/with-styled-jsx-plugins"
							target="_blank"
						>
							Example with PostCSS
						</a>
					</li>
				</ul>
				<a
					className="link"
					href="https://nextjs.org/docs/basic-features/built-in-css-support"
					target="_blank"
				>
					Source
				</a>
			</article>
			<footer className="footer">
				<ul className="creds">
					<li className="credsItem">
						<a className="link" href="https://nextjs.org/" target="_blank">
							Powered by Next.js
						</a>
					</li>
					<li className="credsItem">
						<a
							className="link"
							href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fakellbl4%2Fintroduction-to-nextjs%2Ftree%2Fmain%2F02-styles"
							target="_blank"
						>
							Deploy with Vercel
						</a>
					</li>
				</ul>
				<div className="author">
					Author{' '}
					<a href="https://pavel.mineev.me" target="_blank">
						Pavel Mineev
					</a>
				</div>
			</footer>
			<style jsx>{`
				.container {
					display: flex;
					box-sizing: border-box;
					max-width: 600px;
					margin: 0 auto;
					padding: 20px 0;
					flex-direction: column;
				}

				.header {
					height: 80px;
					display: flex;
					margin-bottom: 40px;
					align-items: center;
					flex-shrink: 0;
					border-bottom: 1px solid #e5e7eb;
				}

				.footer {
					display: flex;
					margin-top: auto;
					padding-top: 20px;
					border-top: 1px solid #e5e7eb;
					justify-content: space-between;
				}

				.creds {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				.credsItem {
					margin-top: 10px;
				}

				.author {
					align-self: flex-end;
				}

				.link {
					color: var(--gray);
				}

				.link:hover {
					color: var(--gray-dark);
					text-decoration: none;
				}

				.linkToMain {
					composes: link;
					display: inline-block;
					margin-left: auto;
					text-decoration: none;
				}

				.linkToSource {
					composes: link linkToMain;
				}
			`}</style>
		</main>
	)
}
