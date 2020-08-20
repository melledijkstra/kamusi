import Dexie from 'dexie'

const db = new Dexie('kamusi')

db.version(1).stores({
    terms: 'lexem_id,translations,word,exercise'
})

export default db