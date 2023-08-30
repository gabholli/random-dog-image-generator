const leftImage = document.getElementById("image-one")
const middleImage = document.getElementById("image-two")
const rightImage = document.getElementById("image-three")
const dogsButton = document.getElementById("dogs-button")

function fetchDogs(image) {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            image.innerHTML = `
            <img class="dog-image" src="${data.message}">`
        })
}

dogsButton.addEventListener("click", function () {
    fetchDogs(leftImage)
    fetchDogs(middleImage)
    fetchDogs(rightImage)
})


