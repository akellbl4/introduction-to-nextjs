import fetcher from 'lib/fetcher'

const owner = 'vercel'

export default function fetchRepos() {
	return fetcher(`https://api.github.com/orgs/${owner}/repos`)
}
