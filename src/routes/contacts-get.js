module.exports = (app, contactsManager) =>
  app.get('/contacts', (req, res) => {
    contactsManager
      .contacts()
      .then(contacts => res.json(contacts));
  });
