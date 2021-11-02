const feedDisplay = document.querySelector('#feed')


fetch('http://localhost:1337/results')
.then(response => {return response.json()
})
.then(data => {
    data.forEach(content => {
            const contentPrint = content
            feedDisplay.insertAdjacentHTML("beforeend", contentPrint)
            /* console.log("test") */
        })
    })
    .catch(err => console.log(err))