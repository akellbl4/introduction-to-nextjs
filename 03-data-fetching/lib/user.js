import fetcher from './fetcher'

export default function fetchUser() {
	return fetcher('https://api.github.com/users/akellbl4')
}
