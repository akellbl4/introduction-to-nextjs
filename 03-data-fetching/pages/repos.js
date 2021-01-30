import fetchRepos from 'lib/repos'
import ReposList from 'components/ReposList'

export async function getStaticProps() {
	const repos = await fetchRepos()

	return {
		props: { repos },
	}
}

export default function Repositories({ repos }) {
	return (
		<article>
			<ReposList items={repos} />
		</article>
	)
}

Repositories.title = 'Repositories'
