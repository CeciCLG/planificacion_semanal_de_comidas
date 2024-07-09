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

export { getpostMenuFood, getDeleteMenuFood }