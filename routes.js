const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('home', '/', 'index')
routes.add('category', '/:cat/', 'index')
routes.add('post', '/:cat/:slug', 'post')