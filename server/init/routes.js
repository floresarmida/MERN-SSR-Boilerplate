import { controller } from '../db'

//  GENERATE ROUTES
export default (app) => {
  /*
  RESTful APIs
  */
  console.log('REST: Initializing rest API routes')
  controllers.REST.map(Model => {
    app.use(new Model().API())
  })
  console.log(`REST: API live for all ${Object.keys(controllers.REST).length - 1} compatible models.`)
}