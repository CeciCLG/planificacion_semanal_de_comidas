async function getMenuFood(userData) {
    try {
        const dataFetchApi = await fetch(`https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/users/${userData}/menu`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        });
        const dataMenu = await dataFetchApi.json();
        return dataMenu

    } catch (error) {
        console.log(error);
    }

}

async function getpostMenuFood(user, newFood) {
    try {
        await fetch(`https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/users/${user}/menu`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newFood)
        });
    } catch (error) {
        console.log(error);
    }
}

async function getDeleteMenuFood(user, newFood) {
    try {
        await fetch(`https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/users/${user}/menu/${newFood}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

async function getDeleteUserMenu(user) {
    try {
        await fetch(`https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/users/${user}/menu/`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

export { getpostMenuFood, getDeleteMenuFood, getMenuFood, getDeleteUserMenu }