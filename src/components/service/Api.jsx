async function getDataToApi(user) {
    try {
        let apiUser = await fetch("https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/users", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        });
        let datauser = apiUser.json;
        return datauser
    } catch (error) {
        console.log(error);
    }

}

export default getDataToApi;