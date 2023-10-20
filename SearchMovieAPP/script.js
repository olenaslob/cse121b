const API_FIRST_PART = "http://www.omdbapi.com/?t="
const APIKEY = "&apikey=27a6cfe3"

let page = 0

let request = new XMLHttpRequest()

let req = new XMLHttpRequest()

let divPagination = document.getElementById("divPagination")

let films = document.getElementById("films")

let searchButton = document.getElementById("searchButton")

let inputFilm = document.getElementById("inputFilm")

let filmDetails = document.getElementById("filmDetails")
var response

searchButton.addEventListener("click", function (e) {
    e.preventDefault()

    request.onload = function () {
        if (request.status == 200) {
            let resp = JSON.parse(request.response)
            response = resp
            if (resp.Response == "True") {
                showFilms(pagination(resp.Search))
                divPagination.style.display = "block"
            }
            else {
                alert(resp.Error)
            }
        }
        else {
            console.log("else")
        }
    }

    request.open("GET", "http://www.omdbapi.com/?s=" + inputFilm.value + "&apikey=27a6cfe3", true)
    request.send()

})

function showFilms(resp) {
    films.innerHTML = " "
    for (const film of resp) {
        films.innerHTML += `
        <li class="film">
                <img src="${film.Poster}">
                <div class="type">${film.Type}</div>
                <div class="title">${film.Title}</div>
                <div class="year">${film.Year}</div>
                <input onclick="detailsClick(event,'${film.imdbID}')" type="button" value="Details">
            </li>
        `
    }
}

function pagination(flms) {
    let arr = []
    for (let i = 0; i < 3; i++) {
        if (flms[i + page * 3] != undefined) {
            arr.push(flms[i + page * 3])
            console.log(flms[i + page * 3])
        }
    }
    return arr
}

function prevClick() {
    if (page == 0) {
        alert("first page")
        return
    }
    page--
    showFilms(pagination(response.Search))
}

function nextClick() {
    if (page == Math.ceil(response.Search.length / 3)-1) {
        alert("last page")
        return
    }
    page++
    showFilms(pagination(response.Search))
}

function detailsClick(e,filmId) {

    req.onload = function() {
        if (req.status == 200) {
            let resp = JSON.parse(req.responseText)
            addDescription(resp)

            if (resp.Response == "True") {
            }
            else {
                alert(resp.Error)
            }
        }
        else {
            console.log("else")
        }
    }
    req.open("GET","http://www.omdbapi.com/?i=" + filmId + "&apikey=27a6cfe3", true)
    req.send()
}

function addDescription(resp) {

    filmDetails.innerHTML=" "
    filmDetails.innerHTML=`
    <img src="${resp.Poster}">

            <div class="point">
                <label>Title:</label>
                <div class="info">${resp.Title}</div>
            </div>
            <div class="point">
                <label>Released:</label>
                <div class="info">${resp.Released}</div>
            </div>
            <div class="point">
                <label>Genre:</label>
                <div class="info">${resp.Genre}</div>
            </div>
            <div class="point">
                <label>Country:</label>
                <div class="info">${resp.Country}</div>
            </div>
            <div class="point">
                <label>Director:</label>
                <div class="info">${resp.Director}</div>
            </div>
            <div class="point">
                <label>Writer</label>
                <div class="info">${resp.Writer}</div>
            </div>
            <div class="point">
                <label>Actors</label>
                <div class="info">${resp.Actors}</div>
            </div>
            <div class="point">
                <label>Awards</label>
                <div class="info">${resp.Awards}</div>
            </div>`
}