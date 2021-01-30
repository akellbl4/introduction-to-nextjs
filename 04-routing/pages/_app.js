import Layout from 'components/Layout'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<Layout title={Component.title ?? pageProps.title ?? 'Routing'}>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
