import db from '../../config/db'
import chatSeeder from './chatSeeder'
import roomChatSeeder from './roomChatSeeder'
import roomJoinSeeder from './roomJoinSeeder'
import userSeeder from './userSeeder'

// Create seeder
db.initialize()
  .then(async () => {
    const tx = db.createQueryRunner()
    tx.connect()
    tx.startTransaction()

    try {
      await userSeeder(tx)
      await roomChatSeeder(tx)
      await roomJoinSeeder(tx)
      await chatSeeder(tx)

      await tx.commitTransaction()
    } catch (err) {
      console.log('Error1: ', err?.message)
      await tx.rollbackTransaction()
    } finally {
      tx.release()
    }
  })
  .catch((err) => {
    console.error('Error during Data Source initialization ', err)
  })
