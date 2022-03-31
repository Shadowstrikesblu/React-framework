/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Job from 'App/Models/Job'
import Jobs from 'Database/migrations/1642423188683_jobs'

export default class JobsController {
    public async index(ctx: HttpContextContract) {
        // const another = new Job()
        const Jobs = await Job.all()
        return ctx.response.send(Jobs)
        // console.log(Jobs)
      }
      public async store(ctx: HttpContextContract) {
        let fields = ctx.request.all()
        const createJobs = await Job.create({
          title : fields.title,
          description : fields.description,
        }) 
        return ctx.response.send(createJobs)
        // console.log(fields)
      }
}
