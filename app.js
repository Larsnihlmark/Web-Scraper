const feedDisplay = document.querySelector('#feed')


fetch('http://localhost:1337/results')
.then(response => {return response.json()
})
.then(data => {
    data.forEach(article => {
            const articleItem = article
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
            /* console.log("test") */
        })
    })
    .catch(err => console.log(err))