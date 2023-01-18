const API = {
    getUsers: () => {

        const users = fetch("https://dummyapi.io/data/v1/user?limit=10", {
            headers: {
                "app-id": "63c5d8b28b274f4b7d2ab82a",
            },
        })
            .then((response) => response.json())
            .then((response) => response.data)

        return users;
    },
};

export {API};