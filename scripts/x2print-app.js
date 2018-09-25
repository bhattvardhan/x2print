'use strict'

const form = document.querySelector('#upload-file')
const url = 'http://127.0.0.1:5000/getStoryJSON'

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    x2print(url, e.target).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })

    // location.assign('./print-story.html')
})