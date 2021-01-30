import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<Head>Styles</Head>
			<header>
				<h1>Styles</h1>
			</header>
			<article>
				<p>
					Welcome to Next.js appliction. You can start writing your fresh app
					with zero configuraiton and with all advantages of React.js and many
					build-in features will make your coding easier
				</p>
				<h2>Built-in style loaders</h2>
				<ul>
					<li>
						<Link href="/css-modules">
							<a>CSS Modules</a>
						</Link>
					</li>
					<li>
						<Link href="/css-in-js">
							<a>CSS-in-JS</a>
						</Link>
					</li>
					<li>
						<Link href="/bootstrap">
							<a>Bootstrap</a>
						</Link>
					</li>
				</ul>
				<h2>Examples</h2>
				<ul>
					<li>
						<a
							className="link link-styled-components"
							href="https://github.com/vercel/next.js/tree/canary/examples/with-styled-components"
							target="_blank"
						>
							Styled Components
						</a>
					</li>
					<li>
						<a
							className="link link-emotion"
							href="https://github.com/vercel/next.js/tree/canary/examples/with-emotion"
							target="_blank"
						>
							Emotion
						</a>
					</li>
					<li>
						<a
							className="link link-tailwind"
							href="https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss"
							target="_blank"
						>
							Tailwind
						</a>
					</li>
				</ul>
			</article>
			<footer>
				<ul>
					<li>
						<a href="https://nextjs.org/" target="_blank">
							Powered by Next.js
						</a>
					</li>
					<li>
						<a
							href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fakellbl4%2Fintroduction-to-nextjs%2Ftree%2Fmain%2F02-styles"
							target="_blank"
						>
							Deploy with Vercel
						</a>
					</li>
				</ul>
				<div>
					Author{' '}
					<a href="https://pavel.mineev.me" target="_blank">
						Pavel Mineev
					</a>
				</div>
			</footer>
			<style>{`
					main {
						display: flex;
						box-sizing: border-box;
						max-width: 600px;
						margin: 0 auto;
						padding: 20px 0;
						flex-direction: column;
					}

					header {
						height: 80px;
						display: flex;
						margin-bottom: 40px;
						flex-shrink: 0;
						align-items: center;
						border-bottom: 1px solid #e5e7eb;
					}

					article {
						flex-grow: 1;
						height: 100%;
					}

					p {
						margin-bottom: 40px;
					}

					footer {
						display: flex;
						margin-top: auto;
						padding-top: 20px;
						border-top: 1px solid #e5e7eb;
						justify-content: space-between;
					}

					footer ul {
						list-style: none;
						padding: 0;
						margin: 0;
					}

					footer li {
						margin-top: 10px;
					}

					footer li a {
						color: var(--gray);
					}

					footer li a:hover {
						color: var(--gray-dark);
    				text-decoration: none;
					}

					footer div {
						align-self: flex-end;
					}

					.link {
						display: inline-block;
					}

					.link:before {
						display: inline-block;
						margin-right: 0.5em;
					}

					.link-styled-components:before {
						content: '💅';
					}

					.link-emotion:before {
						content: '👩‍🎤';
					}

					.link-tailwind:before {
						content: '💨';
					}
				`}</style>
		</main>
	)
}
