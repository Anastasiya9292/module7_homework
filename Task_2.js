const userProfile = {
    name: 'Nastya',
    age: 30,
    country: 'Russia',
    job: 'Frontend'
}

function serchKeyObj(key, obj) {
    console.log(obj.hasOwnProperty(key))
}

serchKeyObj('age', userProfile)
