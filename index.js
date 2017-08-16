const app = "I don't do much.";

// let xhr = new XMLHttpRequest()
// xhr.open('GET',
// 	'https://api.github.com/repos/jquery/jquery/commits')
// xhr.reponseType = 'json'

// xhr.onload = function() {
// 	console.log(xhr.reseponse)
// }

// xhr.onerror = function() {
// 	console.log('Booo')
// }

// xhr.send()
const token = '24f59c7753d77d0e6049a4c3a6b70bb21ab69232'
fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: `token ${token}`
	}
.then(json => console.log(json))
}).then(res => res.json())
// response 'res' from fetch to turn into JSON
// passes JSON 