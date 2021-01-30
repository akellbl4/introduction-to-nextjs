import Link from 'next/link'

import styles from './ReposList.module.css'

export default function Repos({ items = [] }) {
	return (
		<>
			<div className={styles.sprite}>
				<svg>
					<symbol id="icon-repo" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M15 16h-6v-2h6v2zm9-8v2h-24v-2l4.485-8h15.087l4.428 8zm-2.286 0l-3.32-6h-12.734l-3.347 6h19.401zm-.714 14h-18v-10h-2v12h22v-12h-2v10z"
						/>
					</symbol>
					<symbol id="icon-fork" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M21 3c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.323.861 2.433 2.05 2.832.168 4.295-2.021 4.764-4.998 5.391-1.709.36-3.642.775-5.052 2.085v-7.492c1.163-.413 2-1.511 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.305.837 2.403 2 2.816v12.367c-1.163.414-2 1.512-2 2.817 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.295-.824-2.388-1.973-2.808.27-3.922 2.57-4.408 5.437-5.012 3.038-.64 6.774-1.442 6.579-7.377 1.141-.425 1.957-1.514 1.957-2.803zm-16.8 0c0-.993.807-1.8 1.8-1.8s1.8.807 1.8 1.8-.807 1.8-1.8 1.8-1.8-.807-1.8-1.8zm3.6 18c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8z"
						/>
					</symbol>
				</svg>
			</div>
			<ul className={styles.repos}>
				{items.map((p) => (
					<li key={p.id}>
						<Link href={`/repos/${p.name}`}>
							<a className={styles.link}>
								<svg className={styles.icon} width={18} height={18}>
									{p.fork ? (
										<use xlinkHref="#icon-fork" />
									) : (
										<use xlinkHref="#icon-repo" />
									)}
								</svg>
								{p.name}
							</a>
						</Link>{' '}
						<Link href={`/repos/${p.name}/ssr`}>
							<a>SSR</a>
						</Link>
						<p>{capitalize(p.description?.slice(0, 200))}</p>
					</li>
				))}
			</ul>
		</>
	)
}

function capitalize(str) {
	if (typeof str !== 'string') {
		return null
	}

	return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}
