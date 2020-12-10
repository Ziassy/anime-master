import "../component/upcoming-list.js";
function upComing() {

    const getUpcoming = async () => {
        const baseUrl = "https://api.jikan.moe/v3/top/anime/1/upcoming";
        try {
            const response = await fetch(`${baseUrl}`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllBooks(responseJson.top.slice(5, 8));
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const renderAllBooks = (upComing) => {
        const listUpcomingElement = document.querySelector("upcoming-list");
        listUpcomingElement.upcomings = upComing;

    };
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };
    getUpcoming();
}

export default upComing;
