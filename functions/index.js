const functions = require("firebase-functions")
const admin = require("firebase-admin")
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true })
  response.send("Hello from Firebase!")
})
exports.projectedCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {

    const project=doc.data();
    const notification={
      content: "Added a new project"
    }

  })
