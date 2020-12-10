import "../component/anime-list.js";

function show() {

    const getAnime = async () => {
        const baseUrl = "https://api.jikan.moe/v3/top/anime/1/airing";
        try {
            const response = await fetch(`${baseUrl}`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllBooks(responseJson.top);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const renderAllBooks = (books) => {
        const listBookElement = document.querySelector("anime-list");
        // console.log(books);
        listBookElement.clubs = books;

    };
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };
    getAnime();
}

export default show;
