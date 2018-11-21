# Quasar CouchApp
> QCouch, Relax!
 
[`InnoDB Indexes`](https://dev.mysql.com/doc/refman/8.0/en/innodb-physical-structure.html) 
are very similar to `Couchdb Databases` without the REST/master-master replication 
interface. A `Couchdb View` is a `Index of a Index`

### Getting Started:
**Install Prerequisits:**
  - [Python](https://www.python.org/downloads/)
  - [couchapp](https://couchapp.readthedocs.io/en/latest/couchapp/install.html)
  - [nodejs](https://nodejs.org/en/download/)
  - [yarn](https://yarnpkg.com/lang/en/docs/install)

```
// Install
yarn

// Run server in a second terminal
yarn start:db

// Build Quasar and Push to Local running Database
yarn build:push
```

Navigate to [http://127.0.0.1:5984/quasar/_design/app/index.html](http://127.0.0.1:5984/quasar/_design/app/index.html)
And see the database GUI [http://127.0.0.1:5984/_utils](http://127.0.0.1:5984/_utils)
