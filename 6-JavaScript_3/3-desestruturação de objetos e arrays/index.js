const person = {
  name: 'Luke',
  job: 'Farmer',
  parents: ['Anakin', 'Padme']
}

/////////////

const name1 = person.name
const { job, parents } = person

console.log(job, name1, parents)

/////////////

const [father, mother] = parents

console.log(father, mother)

//////////////

const createUser = ({ name, job, parents }) => {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}

const luke = createUser(person)

console.log(luke)
