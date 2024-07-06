async function getDataFromApi(user) {
    try {
        const apiUser = await fetch("https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/users", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        });
        let datauser = apiUser.json();
        return datauser
    } catch (error) {
        console.log(error);
    }

}

async function getUserData() {
    const apiDataUser = await fetch("https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/users", {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    });
    const dataUser = apiDataUser.json();
    return dataUser;
}

export { getDataFromApi, getUserData }