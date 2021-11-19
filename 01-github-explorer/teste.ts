type User = {
    name: string,
    age: number,
    address: {
        city: string,
        UF: string,
    }
}

function showUser(user: User) {
    return `Hello ${user.name}, your age is ${user.age}, your city is ${user.address.city} - ${user.address.UF}`
}

showUser({
    name: 'Lucas',
    age: 23, 
    address: {
        city: 'Itajubá',
        UF: 'MG'
    }
})