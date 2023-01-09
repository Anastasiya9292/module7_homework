const userProfile = {
    name: 'Nastya',
    age: 30,
    country: 'Russia',
    job: 'Frontend'
}

function keyValuiObj(obj) {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(`${key} - ${obj[key]}`)
        }
    }
}

keyValuiObj(userProfile)