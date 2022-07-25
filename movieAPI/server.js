$(document).ready(function(){
    $("#submitBtn").click(getData);
    // console.log(2);
    async function getData()
    {
        let movieName = $("#movieName").val();
        console.log(movieName);
        let url = `https://www.omdbapi.com/?t=${movieName}&apikey=f3113ac`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        $(".content").html(
            `
             <div class="poster">
                <img src="${data.Poster}" alt="poster"/>
            </div>
            <div class="info">
                <h1 class="name d-inline m-0">${data.Title}</h1>
                <span class="year small">(${data.Year})</span>
                <h4 class="genre my-2">Genre: ${data.Genre}</h4>
                <h5 class="language">Language: ${data.Language}</h5>
            </div>
            <div class="plot">
                <p>${data.Plot}</p>
            </div>
            `
        );
    }
});