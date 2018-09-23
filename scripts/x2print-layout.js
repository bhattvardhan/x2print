'use strict'

stories = getStories()

const setStories = document.querySelector('#story_listing')

renderStories(setStories, stories)