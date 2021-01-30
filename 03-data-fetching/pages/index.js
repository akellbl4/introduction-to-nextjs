export default function Home() {
	return (
		<section>
			<p>
				In this example I'm trying to show how data fetching works. I use two
				types of data fetching: <code>getStaticProps</code> and{' '}
				<code>getServerSideProps</code>I don't want to add `getInitialProps` to
				this example because it's not recommended way to fetch data any more.
			</p>
			<p>Check out links in header</p>
		</section>
	)
}

Home.title = 'Data fetching'
