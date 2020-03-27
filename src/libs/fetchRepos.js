export default async function(){
    let response = await fetch("https://api.github.com/users/antonio072/repos")
    return response.json()
}