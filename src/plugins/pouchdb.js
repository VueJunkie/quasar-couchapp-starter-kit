import VuePouchDB from 'vuejs-pouchdb'
import RelationalPouch from 'relational-pouch'
import PouchDBFind from 'pouchdb-find'

VuePouchDB.plugin(PouchDBFind)
VuePouchDB.plugin(RelationalPouch)

export default ({ Vue }) => {
  Vue.use(VuePouchDB, { name: 'quasar' })
}
