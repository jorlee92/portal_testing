import { firestore } from '@/firebase'
import { SET_PROJECT_LIST, ADD_PROJECT_TO_STATE, SET_PROJECT_MESSAGES } from '@/store/mutation-types'
let pmRef = firestore.collection('project_messages')
export default {
  getProjectMessageList ({ commit }, id) {
    pmRef.get()
      .then((result) => {
        let messages = []
        result.docs.forEach((message) => {
          messages.push(message.data())
        })
        commit(SET_PROJECT_MESSAGES, messages)
      })
  },
  getProjectList ({ commit }) {
    firestore.collection('projects').get()
      .then((snap) => {
        let projects = {}
        snap.docs.forEach((project) => {
          projects[project.id] = project.data()
        })
        commit(SET_PROJECT_LIST, projects)
      })
  },
  fetchProject ({ commit }, id) {
    let project = {}
    firestore.collection('projects').doc(id).get()
      .then((snap) => {
        project[id] = snap.data()

        commit(ADD_PROJECT_TO_STATE, project)
      })
  },
}
