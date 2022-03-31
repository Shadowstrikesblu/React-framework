import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Job from 'App/Models/Job'
export default class JobSeeder extends BaseSeeder {
  public async run(){
    await Job.createMany([{
      
      title: 'Acteur',

      description: 'Un mec qui joue dans des films',
      }
    ])
  }
}
