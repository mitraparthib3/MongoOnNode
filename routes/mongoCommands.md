# Mongo shell usefull commands

- show dbs [display all databases]
- db [displays current database name]
- use <dbname> [explore the provided dbname]
  - show collection [list all collection name under the selected db]
  - db.dropDatabase()
  - db.<collectionName>.insert({JSON}) [inserts an object into the mentioned collection]
  - db.<collectionName>.find().pretty() [returns all objects in the collection]
    - db.<collectionName>.find({ name: parthib }).pretty()
    - db.<collectionName>.find().sort({ name: 1}).pretty() [identifier name = 1 for Ascending, -1 for desending ]
    - db.<collectionName>.find({ name: parthib }).count()
    - db.<collectionName>.find({ name: parthib }).limit(2).pretty()
    - db.<collectionName>.find().forEach(function(doc){ print(doc.name)}) [forEach loop is available, it takes a function]
- db.<collectionName>.update({ id :}, {new JSON}, {upsert: true})

- use <newdbname>; db.createCollection('<collectionName>') [creates a db with a colletion]
