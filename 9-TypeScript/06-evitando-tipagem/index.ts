function sendSpaceship(spaceship: { pilot: string, copilot?: string}) {
  //...
}

sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca' })

sendSpaceship({ pilot: 'Luke' })


let input: any

input = 'Test'
input = 20
input = []

let text: string

text = input

let input2: unknown

input = 'Test'
input = 20
input = []


function verification(test) {
  if (test) {

  } else {
    let _check: never
    let text = _check

    text = ''

    return _check
  }
}