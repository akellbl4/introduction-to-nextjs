export default function Home() {
	return (
		<section>
			<p>
				This example about routing ad how data fetching functions work have deal
				with it.
			</p>
			<p>
				Routing based on file-system router. It has nesting and dynamic routes.
			</p>
			<p>
				If you want to check params of current route or use navigation functions
				you can use <code style={{ fontSize: '1.2em' }}>next/router</code> page.
			</p>
		</section>
	)
}

Home.title = 'Routing'
