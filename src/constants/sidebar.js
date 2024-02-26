const { ROUTES } = require('./routes')
const [ 
  HOME, 
  ABOUT, 
  EXPERIENCE,
  PROJECTS,
  SETTINGS,
] = ROUTES

const pathsTop = [
  HOME,
  EXPERIENCE,
  PROJECTS,
]

const pathsBottom = [
  ABOUT,
  SETTINGS,
]

module.exports = {
  pathsTop,
  pathsBottom,
}