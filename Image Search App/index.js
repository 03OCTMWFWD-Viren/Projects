const accesskey = `Y8W3rmrPiy4f-wdVk0Bhm38qpPYO2A5QNDXFEhVwukI`

const formEl = document.querySelector("form")
const inpEl = document.getElementById("search-i")
const seRes = document.querySelector(".search-result")
const show = document.getElementById("show-more")

let inputData = ""
let page = 1;

async function searchImage() {
    inputData = inpEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page === 1) {
        seRes.innerHTML = ""
    }
    results.map((result) => {
        const imagewrapper = document.createElement('div')
        imagewrapper.classList.add("search-re")
        const image = document.createElement("img")
        image.src = result.urls.small

        imagewrapper.appendChild(image)
        imagewrapper.appendChild(imagewrapper)
    });

    page++
    if (page > 1) {
        show.style.display = "block"
    }
}
formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImage()
});

show.addEventListener("click", () => {
    searchImage()
});