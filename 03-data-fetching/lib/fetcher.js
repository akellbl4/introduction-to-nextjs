const BASE_URL = typeof window === 'undefined' ? process.env.BASE_URL : ''

export default async function fetcher(endpoint, params) {
	const url = endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint}`
	const req = await fetch(url, params)

	if (!req.ok) {
		const err = new Error(`Error is occured while fetching ${url}`)

		err.status = req.status
		throw err
	}

	const data = req.json()

	return data
}
