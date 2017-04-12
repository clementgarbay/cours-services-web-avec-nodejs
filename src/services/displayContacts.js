module.exports = contacts =>
  contacts
    .map(c => `${c.lastName.toUpperCase()} ${c.firstName}`)
    .forEach(c => console.log(c));
