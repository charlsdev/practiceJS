interface User {
   id: number
   name: string
   username: string
   email: string
   phone: string
   website: string
}

interface Response extends Pick<User, 'name' | 'email'> { age: number }

const response = await fetch('https://jsonplaceholder.typicode.com/users')
const json: User[] = await response.json()
const result: Response[] = json.map(it => ({ 
   name: it.name,
   email: it.email,
   age: Math.floor(Math.random() * (150 - 5 + 1)) + 5
}))

console.log(result)
