const { MongoClient, ObjectId} = require('mongodb');

const uri = "mongodb+srv://fike21:Nebadamas1996@cluster.tyvzsbd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function main(){

    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */


    async function listDatabases(client){
      databasesList = await client.db().admin().listDatabases();

      console.log("Databases:");
      databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    }; 

    try {
        await client.connect();
        
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } 
}

async function getAllNotes() {
  const database = client.db('testdb');
  const notesCollection = database.collection('notes');
  const notes = await notesCollection.find({}).toArray();
  return notes;
}

async function addNote(value) {
  const database = client.db('testdb');
  const notesCollection = database.collection('notes');
  const note = await notesCollection.insertOne(value);
  return note;
}

async function deleteNote(value) {
  const database = client.db('testdb');
  const notesCollection = database.collection('notes');
  const note = await notesCollection.deleteOne({ "_id" : ObjectId(value) } );
  return note;
}

async function changeNote(value) {
  console.log(value.id, value.text)
  const database = client.db('testdb');
  const notesCollection = database.collection('notes');
  const note = await notesCollection.updateOne({"_id" : ObjectId(value.id)} , {$set: {text : value.text}});
  console.log(note)
  return note;
}

module.exports = {getAllNotes, main, addNote, deleteNote, changeNote}