import postgres from '@service/postgresConnection'

function addOneName(name) {
  return postgres.db
    .one(
      `INSERT INTO names
    (name, amount)
    VALUES
    ($<name>, $<amount>)
    RETURNING *`,
      { name: name.name, amount: name.amount }
    )
    .catch(err => console.log(err))
}

function deleteAllNames() {
  return postgres.db
    .none(`DELETE FROM names`)
    .catch(err => console.log(err))
}

function getSortedNames(params) {
  let sql = `select * from names order by ${params.column} ${params.order}`
  return (
    postgres.db
      .many(sql)
      // ToDo, send errors to the client
      .catch(err => console.log(err))
  )
}

export default {
  addOneName,
  deleteAllNames,
  getSortedNames,
}
