export default async function Posts({params: {slug}}) {
	const item = await getPost(slug)
	return (
		<div>
			<h1>{`${item.id} - ${item.username}`}</h1>
		</div>
	)
}
async function getPost(id) {
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
	if (!res.ok) {
		console.log(res)
		throw new Error('Failed to fetch data')
	}
	
	return res.json()
}
