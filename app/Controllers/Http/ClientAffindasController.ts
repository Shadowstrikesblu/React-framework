/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ClientAffindasController {
  public async index(ctx: HttpContextContract) {
    let file = ctx.request.file('file')
    let readStream
    if (file) {
      await file.move(Application.tmpPath('uploads'))
      // await file.moveToDisk('./')
      const fs = require('fs')
      readStream = fs.createReadStream(`tmp/uploads/${file.clientName}`)
    }
    // const isExist = await Drive.exists(readStream.path);
    const { AffindaCredential, AffindaAPI } = require('@affinda/affinda')
    const credential = new AffindaCredential('50318037e03aa844679703198a63894f1ebbb578')
    const client = new AffindaAPI(credential)
    // const display = await Database.from('react').select('*').orderBy('id', 'desc')
    // const readStream = fs.createReadStream(`public\\${arrayPdf[1]}`)
    const result = await client
      .createResume({ file: readStream })
      .then((result) => {
        console.log('Returned data:')
        console.dir(result)
        return result
      })
      .catch((err) => {
        console.log('An error occurred:')
        console.error(err)
        return err
      })
    return ctx.response.send(result)
    
  }
  public async create(ctx: HttpContextContract) {
    const data = {
      "data": {
        "data": {
          "name": {
            "raw": "Hichem Rtibi",
            "first": "Hichem",
            "last": "Rtibi",
            "middle": "",
            "title": ""
          },
          "phoneNumbers": [
            "+21655947098"
          ],
          "websites": [],
          "emails": [
            ":hichem.rtibi@gmail.com"
          ],
          "dateOfBirth": null,
          "location": null,
          "objective": "",
          "languages": [
            "French"
          ],
          "summary": "",
          "totalYearsExperience": 2,
          "headShot": null,
          "education": [
            {
              "organization": null,
              "accreditation": {
                "education": "Oracle Certified Associate, Java SE 8 Programmer(TMI).",
                "inputStr": "Oracle Certified Associate, Java SE 8 Programmer(TMI).",
                "matchStr": "",
                "educationLevel": "certificate"
              },
              "grade": null,
              "location": null,
              "dates": {
                "completionDate": "2019-01-01T00:00:00.000Z",
                "isCurrent": false,
                "startDate": null
              }
            },
            {
              "organization": null,
              "accreditation": {
                "education": "Licence Fondamentale en math??matiques.",
                "inputStr": "Licence Fondamentale en math??matiques.",
                "matchStr": "",
                "educationLevel": null
              },
              "grade": null,
              "location": null,
              "dates": {
                "completionDate": "2010-01-01T00:00:00.000Z",
                "isCurrent": false,
                "startDate": null
              }
            }
          ],
          "profession": null,
          "linkedin": null,
          "workExperience": [
            {
              "jobTitle": "",
              "organization": "Looyas",
              "location": null,
              "jobDescription": "",
              "dates": null,
              "occupation": {
                "jobTitle": "",
                "jobTitleNormalized": null,
                "managementLevel": null,
                "classification": null
              }
            },
            {
              "jobTitle": "Ing??nieur de d??veloppement JAVAEE/Angular",
              "organization": "Talys-Consulting",
              "location": null,
              "jobDescription": "MISSION : RHIS-SOFTWARE Juillet 2019-juillet 2020. PROJET : RHIS-SOLUTIONS ??? D??veloppement et impl??mentation des services m??tiers du module GDH : gestion des heures, gestion des contrats, gestion des avenants. ??? Correction des bogues et d??veloppement des diff??rents taches/modules demand??s par le client. ??? Environnement technique : Jira/Scrum, Java8, Java/JEE, Spring & Hibernate, (JPA version 2), IntelijIDE, Git, Angular 7, PostgresSql, REST web services, Postman, Web Storm. MISSION : ORANGE-TUNISIE Mars 2019-juin 2019. PROJET : GPS (gestion de produits et services) ??? D??veloppement et documentation des web services Rest . ??? Test automatis?? s??l??nium. Environnement technique : Jira/Scrum, Java7,SpringMvc,Spring Data, Eclipse,Swagger Ui ,Git, Oracle, Postman,Eclipse. PROET : TALYS TRACKING Application web est destin??e aux services commercial ainsi que le service ressource humaine chez Talys, pour la sauvegarde des consultants et le suivi de leurs documents, situations et mission (??tat administratif, date d??but de missions fin de mission pour un consultant, historiques et les alertes.). Environnement technique : Java7, Java/JEE, Spring & Hibernate, (JPA version 2), Eclipse, Git, Angular 5, MySql , REST web services, Postman,visual code. ",
              "dates": {
                "startDate": "2018-12-01T00:00:00.000Z",
                "endDate": "2020-09-01T00:00:00.000Z",
                "monthsInPosition": 21,
                "isCurrent": false
              },
              "occupation": {
                "jobTitle": "Ing??nieur de d??veloppement JAVAEE/Angular",
                "jobTitleNormalized": null,
                "managementLevel": null,
                "classification": null
              }
            },
            {
              "jobTitle": "Ing??nieur en d??veloppement",
              "organization": "STIC",
              "location": null,
              "jobDescription": "PROJET :Maintenance ??volutive de Platform export import Akanea. ??? Cr??ation des Etats Crystal reports. ??? Formation de langage Progress 4GL. ??? D??veloppement des web services.Net/Soap. Environnement technique : Progress Devloper Studio OpenEdge, Visual Studio 2015, Crystal Reports. Langues : \n???Arabe . \n???Fran??ais. Int??r??ts : \n???Football . \n???Cin??ma. \n???Nouvelles technologies. ",
              "dates": {
                "startDate": "2018-03-01T00:00:00.000Z",
                "endDate": "2018-11-01T00:00:00.000Z",
                "monthsInPosition": 8,
                "isCurrent": false
              },
              "occupation": {
                "jobTitle": "Ing??nieur en d??veloppement",
                "jobTitleNormalized": null,
                "managementLevel": null,
                "classification": null
              }
            }
          ],
          "skills": [
            {
              "name": "Base",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                }
              ]
            },
            {
              "name": "Scrum (Software Development)",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Dilution Of Precision (GPS)",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Junit",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                }
              ]
            },
            {
              "name": "MySQL",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Gitlab",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                }
              ]
            },
            {
              "name": "HTML5",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                }
              ]
            },
            {
              "name": "Cascading Style Sheets (CSS)",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                }
              ]
            },
            {
              "name": "Postman",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Crystal Reports (Reporting Software)",
              "lastUsed": "2018-11-01",
              "numberOfMonths": 8,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "WorkExperience",
                  "position": 2
                }
              ]
            },
            {
              "name": "SQL (Programming Language)",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "JavaScript (Programming Language)",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                }
              ]
            },
            {
              "name": "Microsoft Visual Studio",
              "lastUsed": "2018-11-01",
              "numberOfMonths": 8,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "WorkExperience",
                  "position": 2
                }
              ]
            },
            {
              "name": "Java (Programming Language)",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "PersonalDetails",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "French Language",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "soft_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                }
              ]
            },
            {
              "name": "Management",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "soft_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": null
                }
              ]
            },
            {
              "name": "Talend",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "PersonalDetails",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "PersonalDetails",
                  "position": null
                }
              ]
            },
            {
              "name": "Gradle",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                }
              ]
            },
            {
              "name": "Apache Tomcat",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                }
              ]
            },
            {
              "name": "Eclipse (Software)",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "file",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "PersonalDetails",
                  "position": null
                },
                {
                  "section": "PersonalDetails",
                  "position": null
                }
              ]
            },
            {
              "name": "Open Studio",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                }
              ]
            },
            {
              "name": "WebStorm",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                }
              ]
            },
            {
              "name": "Platform",
              "lastUsed": "2018-11-01",
              "numberOfMonths": 8,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "WorkExperience",
                  "position": 2
                }
              ]
            },
            {
              "name": "JIRA",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Swagger UI",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Hibernate (Java)",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "JSON",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                }
              ]
            },
            {
              "name": "Angular (Web Framework)",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "tracer",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                }
              ]
            },
            {
              "name": "Test",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Draft (Boiler)",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": null
                }
              ]
            },
            {
              "name": "Git",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Projects",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Spring Boot",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                }
              ]
            },
            {
              "name": "Web Services",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 29,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 2
                }
              ]
            },
            {
              "name": "Simple Object Access Protocol (SOAP)",
              "lastUsed": "2018-11-01",
              "numberOfMonths": 8,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 2
                }
              ]
            },
            {
              "name": "Consultant",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "soft_skill",
              "sources": [
                {
                  "section": "PersonalDetails",
                  "position": null
                },
                {
                  "section": "PersonalDetails",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "MySQL",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "Skills/Interests/Languages",
                  "position": null
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                },
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Dottrace",
              "lastUsed": null,
              "numberOfMonths": null,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "Projects",
                  "position": null
                }
              ]
            },
            {
              "name": "Gpsd",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            },
            {
              "name": "Modula",
              "lastUsed": "2020-09-01",
              "numberOfMonths": 21,
              "type": "hard_skill",
              "sources": [
                {
                  "section": "WorkExperience",
                  "position": 1
                }
              ]
            }
          ],
          "certifications": [
            "Certification Java SE 8 1Z0 808",
            "Langages de programmation Java7 Java8 SQL HTML5 CSS JavaScript Progress4Gl",
            "2019 Oracle Certified Associate Java SE 8 Programmer TMI"
          ],
          "publications": [],
          "referees": [],
          "sections": [
            {
              "sectionType": "PersonalDetails",
              "bbox": [
                70.92228,
                49.274292,
                479.56708,
                188.74518
              ],
              "pageIndex": 0,
              "text": "DOSSIER DE COMPETENCES CONSULTANT JAVAEE/TALEND Certification Java SE 8 :1Z0-808 Hichem Rtibi Tel : +216 55 947 098 Email :hichem.rtibi@gmail.com"
            },
            {
              "sectionType": "Skills/Interests/Languages",
              "bbox": [
                71.37156,
                219.47229,
                509.51703,
                402.6841
              ],
              "pageIndex": 0,
              "text": "COMPETENCES COMPETENCES TECHNIQUES ??? Langages de programmation : Java7, Java8, SQL, HTML5, CSS, JavaScript, Progress4Gl. ??? Frameworks : Spring Boot, Spring Data Spring MVC, JPA(Version2), Hibernate, Angular ,Angular js, Ionic1. ??? Webservices et outils : Rest Webservices, Soap, Json, Html5, css, Eclipse, IntelijIDE,Webstorm, Json Postman Advanced Rest Client. ??? Syst??mes de gestion des versions :Git/Gitlab. ??? Conception et m??thodologie : UML, Scrum,Design Pattern. ??? Outil de build :Maven,Gradle. ??? Bases de donn??es relationnelles : Oracle11g, MySQL."
            },
            {
              "sectionType": "Education",
              "bbox": [
                76.112755,
                433.94235,
                420.53284,
                488.67294
              ],
              "pageIndex": 0,
              "text": "FORMATIONS ??? 2019 Oracle Certified Associate, Java SE 8 Programmer(TMI). ??? 2016 Dipl??me national d'ing??nieur en informatique (SUPTECH). ??? 2010 Licence Fondamentale en math??matiques."
            },
            {
              "sectionType": "WorkExperience",
              "bbox": [
                71.792755,
                514.7186,
                463.75983,
                526.82104
              ],
              "pageIndex": 0,
              "text": "Looyas Sept 2020-Pr??sent"
            },
            {
              "sectionType": "Education",
              "bbox": [
                71.124,
                537.958,
                301.07,
                548.79407
              ],
              "pageIndex": 0,
              "text": "Ing??nieur en d??veloppement JAVAEE/TALEND"
            },
            {
              "sectionType": "Projects",
              "bbox": [
                71.51124,
                578.08234,
                535.54645,
                720.8541
              ],
              "pageIndex": 0,
              "text": "REFERENCES PROJETS PROJET : MBIOLIMS : ??? D??veloppement et maintenance des nouvelles fonctionnalit??s du produit MBioLIMS BioBanking qui permet de g??rer et tracer les ??chantillons biologiques collect??s dans le cadre de protocoles, ??tudes, essais cliniques. ??? Migration des donn??es d'une base de donn??es ?? une autre ?? travers les jobs Talend. ??? Mots cl??s : Java 8, Tomcat, Gradle, JUnit, SQL, Jira/Scrum Git/GitLab, Eclipse, Talend, SQL Devloper , Eclipse,Talend Open Studio."
            },
            {
              "sectionType": "WorkExperience",
              "bbox": [
                94.90824,
                61.16858,
                560.92206,
                581.5541
              ],
              "pageIndex": 1,
              "text": "Talys-Consulting D??c 2018-S??pt 2020 Ing??nieur de d??veloppement JAVAEE/Angular MISSION : RHIS-SOFTWARE Juillet 2019-juillet 2020. PROJET : RHIS-SOLUTIONS ??? D??veloppement et impl??mentation des services m??tiers du module GDH : gestion des heures, gestion des contrats, gestion des avenants. ??? Correction des bogues et d??veloppement des diff??rents taches/modules demand??s par le client. ??? Environnement technique : Jira/Scrum, Java8, Java/JEE, Spring & Hibernate, (JPA version 2), IntelijIDE, Git, Angular 7, PostgresSql, REST web services, Postman, Web Storm. MISSION : ORANGE-TUNISIE Mars 2019-juin 2019. PROJET : GPS (gestion de produits et services) ??? D??veloppement et documentation des web services Rest . ??? Test automatis?? s??l??nium. Environnement technique : Jira/Scrum, Java7,SpringMvc,Spring Data, Eclipse,Swagger Ui ,Git, Oracle, Postman,Eclipse. PROET : TALYS TRACKING Application web est destin??e aux services commercial ainsi que le service ressource humaine chez Talys, pour la sauvegarde des consultants et le suivi de leurs documents, situations et mission (??tat administratif, date d??but de missions fin de mission pour un consultant, historiques et les alertes.). Environnement technique : Java7, Java/JEE, Spring & Hibernate, (JPA version 2), Eclipse, Git, Angular 5, MySql , REST web services, Postman,visual code. STIC Mars2018-Nov2018 Ing??nieur en d??veloppement PROJET :Maintenance ??volutive de Platform export import Akanea. ??? Cr??ation des Etats Crystal reports. ??? Formation de langage Progress 4GL. ??? D??veloppement des web services.Net/Soap. Environnement technique : Progress Devloper Studio OpenEdge, Visual Studio 2015, Crystal Reports. Langues :"
            },
            {
              "sectionType": "Skills/Interests/Languages",
              "bbox": [
                96.084,
                591.43005,
                267.26,
                702.78406
              ],
              "pageIndex": 1,
              "text": "??? Arabe . ??? Fran??ais. Int??r??ts : ??? Football . ??? Cin??ma. ??? Nouvelles technologies."
            }
          ],
          "isResumeProbability": 95,
          "rawText": "DOSSIER DE COMPETENCES CONSULTANT JAVAEE/TALEND Certification Java SE 8 :1Z0-808 Hichem Rtibi Tel : +216 55 947 098 Email :hichem.rtibi@gmail.com\nCOMPETENCES COMPETENCES TECHNIQUES ??? Langages de programmation : Java7, Java8, SQL, HTML5, CSS, JavaScript, Progress4Gl. ??? Frameworks : Spring Boot, Spring Data Spring MVC, JPA(Version2), Hibernate, Angular ,Angular js, Ionic1. ??? Webservices et outils : Rest Webservices, Soap, Json, Html5, css, Eclipse, IntelijIDE,Webstorm, Json Postman Advanced Rest Client. ??? Syst??mes de gestion des versions :Git/Gitlab. ??? Conception et m??thodologie : UML, Scrum,Design Pattern. ??? Outil de build :Maven,Gradle. ??? Bases de donn??es relationnelles : Oracle11g, MySQL.\nFORMATIONS ??? 2019 Oracle Certified Associate, Java SE 8 Programmer(TMI). ??? 2016 Dipl??me national d'ing??nieur en informatique (SUPTECH). ??? 2010 Licence Fondamentale en math??matiques.\nLooyas Sept 2020-Pr??sent\nIng??nieur en d??veloppement JAVAEE/TALEND\nREFERENCES PROJETS PROJET : MBIOLIMS : ??? D??veloppement et maintenance des nouvelles fonctionnalit??s du produit MBioLIMS BioBanking qui permet de g??rer et tracer les ??chantillons biologiques collect??s dans le cadre de protocoles, ??tudes, essais cliniques. ??? Migration des donn??es d'une base de donn??es ?? une autre ?? travers les jobs Talend. ??? Mots cl??s : Java 8, Tomcat, Gradle, JUnit, SQL, Jira/Scrum Git/GitLab, Eclipse, Talend, SQL Devloper , Eclipse,Talend Open Studio.\nTalys-Consulting D??c 2018-S??pt 2020 Ing??nieur de d??veloppement JAVAEE/Angular MISSION : RHIS-SOFTWARE Juillet 2019-juillet 2020. PROJET : RHIS-SOLUTIONS ??? D??veloppement et impl??mentation des services m??tiers du module GDH : gestion des heures, gestion des contrats, gestion des avenants. ??? Correction des bogues et d??veloppement des diff??rents taches/modules demand??s par le client. ??? Environnement technique : Jira/Scrum, Java8, Java/JEE, Spring & Hibernate, (JPA version 2), IntelijIDE, Git, Angular 7, PostgresSql, REST web services, Postman, Web Storm. MISSION : ORANGE-TUNISIE Mars 2019-juin 2019. PROJET : GPS (gestion de produits et services) ??? D??veloppement et documentation des web services Rest . ??? Test automatis?? s??l??nium. Environnement technique : Jira/Scrum, Java7,SpringMvc,Spring Data, Eclipse,Swagger Ui ,Git, Oracle, Postman,Eclipse. PROET : TALYS TRACKING Application web est destin??e aux services commercial ainsi que le service ressource humaine chez Talys, pour la sauvegarde des consultants et le suivi de leurs documents, situations et mission (??tat administratif, date d??but de missions fin de mission pour un consultant, historiques et les alertes.). Environnement technique : Java7, Java/JEE, Spring & Hibernate, (JPA version 2), Eclipse, Git, Angular 5, MySql , REST web services, Postman,visual code. STIC Mars2018-Nov2018 Ing??nieur en d??veloppement PROJET :Maintenance ??volutive de Platform export import Akanea. ??? Cr??ation des Etats Crystal reports. ??? Formation de langage Progress 4GL. ??? D??veloppement des web services.Net/Soap. Environnement technique : Progress Devloper Studio OpenEdge, Visual Studio 2015, Crystal Reports. Langues :\n??? Arabe . ??? Fran??ais. Int??r??ts : ??? Football . ??? Cin??ma. ??? Nouvelles technologies."
        },
        "meta": {
          "identifier": "kzurwMtD",
          "fileName": "Cv_Hichem_Rtibi_.pdf.136610058.pdf",
          "ready": true,
          "readyDt": "2022-02-02T12:33:37.168Z",
          "failed": false,
          "expiryTime": null
        },
        "error": {
          "errorCode": null,
          "errorDetail": null
        }
      }
    }

    return ctx.response.send(data)

  }
}
