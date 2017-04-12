module.exports = (app, contactsRepository) =>
  app.get('/contacts', (req, res) => {
    contactsRepository
      .findAll()
      .then(contacts => res.json(contacts));
  });
