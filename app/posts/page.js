import Image from 'next/image'

export default async function Posts() {
	const posts = await getData()
	return (
		<div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}><a href={`posts/${post.id}`}> {post.username} </a></li>
				))}
			</ul>
		</div>
	)
}
async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	
	return res.json()
}