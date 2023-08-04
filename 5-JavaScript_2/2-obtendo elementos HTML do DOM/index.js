function show() {
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)

  const listElements = document.getElementsByTagName('li')
  console.log(listElements)

  const contactInput = document.getElementsByClassName('contact-input')
  console.log(contactInput)

  const firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)

  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)
}
