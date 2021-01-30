import fetchUser from 'lib/user'
import Profile from 'components/Profile'

export async function getServerSideProps() {
	const user = await fetchUser()

	return {
		props: {
			user,
			revalidate: 24 * 60 * 60, // 24 hours
		},
	}
}

export default function About({ user }) {
	return <Profile {...user} />
}

About.title = 'About'
