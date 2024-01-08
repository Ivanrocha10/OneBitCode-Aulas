function PhoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, '')
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, '')
}

console.log(new PhoneNumber('+55 (41) 9 8468-5317'))
console.log(new PhoneNumber('+1 (419) 9 fd68-531-7000'))
