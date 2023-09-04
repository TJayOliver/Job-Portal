const allowedSites = ['http://localhost:3000']

export const options = {
  origin : (origin, callback)=>{
    if (allowedSites.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Contact The Site Administrator. Thanks!'))
    }
  }
}