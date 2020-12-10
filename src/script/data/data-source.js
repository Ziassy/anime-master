const urlSeason = "https://api.jikan.moe/v3/season/2020";
const urlGenre = "https://api.jikan.moe/v3/genre/anime";

class DataSource {
    //using fetch
    static searchAnime(keyword) {
        return fetch(
            `https://api.jikan.moe/v3/search/anime?q=${keyword}`
        )
            .then(response => response.json())
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }

    // static showBySession(session) {
    //     return fetch(`${urlSeason}/${session}`)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(responseJson => {
    //             if (responseJson) {
    //                 return Promise.resolve(responseJson.anime);
    //             }
    //             else {
    //                 return Promise.reject(`Something went Wrong`);
    //             }
    //         })
    // };

    static showSummer() {
        return fetch(`${urlSeason}/summer`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };

    static showSpring() {
        return fetch(`${urlSeason}/spring`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };

    static showFall() {
        return fetch(`${urlSeason}/fall`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };

    static showWinter() {
        return fetch(`${urlSeason}/winter`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };
    static genreAction() {
        return fetch(`${urlGenre}/1`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };
    static genreAdventure() {
        return fetch(`${urlGenre}/2`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };
    static genreComedy() {
        return fetch(`${urlGenre}/4`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };
    static genreSchool() {
        return fetch(`${urlGenre}/23`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };
    static genreThriller() {
        return fetch(`${urlGenre}/41`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };
    static genreHorror() {
        return fetch(`${urlGenre}/14`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };
    static genreRomance() {
        return fetch(`${urlGenre}/22`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };
    static genreVampire() {
        return fetch(`${urlGenre}/32`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.anime);
                }
                else {
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };



}

export default DataSource;
