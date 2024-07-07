async function getMenuFood(user) {
    try {
        const dataFetchApi = await fetch(`https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/${user.id}/menu`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        });

        const dataMenu = dataFetchApi.json();
        return dataMenu;
    } catch (error) {
        console.log(error);
    }

}

async function getpostMenuFood(user, newFood) {
    try {
        const dataFetchApi = await fetch(`https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/${user.id}/menu`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newFood)
        });
        const dataMenu = dataFetchApi.json();
        return dataMenu;
    } catch (error) {
        console.log(error);
    }
}

export { getMenuFood, getpostMenuFood }