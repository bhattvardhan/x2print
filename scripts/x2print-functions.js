'use strict'

let stories = [
    {
        "title": "Ability to subscribe for offers",
        "description": "As a user I am able to subscribe to offers"
    },
    {
        "title": "Ability to use touch ID",
        "description": "As an X app user, I am able to log in using touch ID on my device"
    }
]

const getStories = () => {
    return stories
}

const x2print = async (url, f) => {
    const data = new URLSearchParams()
    
    for (const pair of new FormData(f)) {
        data.append(pair[0], pair[1]);
    }
    
    const response = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json',
        },
        enctype: 'multipart/form-data',
        mode: 'no-cors'
    })

    if (response.status === 200) {
        return response
    } else {
        throw new Error('Unable to create a print layout')
    }
}

const generateStoriesDOM = (story) => {
    const storyListElement = document.createElement('li')
    const storyTitleElement = document.createElement('p')

    storyTitleElement.textContent = story.title
    storyListElement.appendChild(storyTitleElement)

    return storyListElement
}

const renderStories = (setStories, stories) => {
    stories.forEach((story) => {
        const storyElement = generateStoriesDOM(story)
        setStories.appendChild(storyElement)
    })
}