/* eslint-disable prettier/prettier */
const { AffindaCredential, AffindaAPI } = require('@affinda/affinda')
const fs = require('fs')

const credential = new AffindaCredential('3729dafbe46d723518d704344b17a5af4b96165e')
const client = new AffindaAPI(credential)
const readStream = fs.createReadStream('PATH_TO_RESUME.pdf')

client
  .createResume({ file: readStream })
  .then((result) => {
    console.log('Returned data:')
    console.dir(result)
  })
  .catch((err) => {
    console.log('An error occurred:')
    console.error(err)
  })

// Can also use a URL:
/*
client.createResume({url: "https://api.affinda.com/static/sample_resumes/example.pdf"}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
}); */
