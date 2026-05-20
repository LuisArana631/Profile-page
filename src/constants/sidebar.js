const { ROUTES } = require('./routes')
const [
  HOME,
  ABOUT,
  EXPERIENCE,
  PROJECTS,
  CONTACT,
] = ROUTES

const pathsTop = [
  HOME,
  EXPERIENCE,
  PROJECTS,
  CONTACT,
]

const pathsBottom = [
  ABOUT,
]

module.exports = {
  pathsTop,
  pathsBottom,
}