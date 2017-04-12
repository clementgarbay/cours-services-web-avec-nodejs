module.exports = (app, contactsManager) =>
  app.get('/contacts', (req, res) => {
    res.json(contactsManager.contacts);
  });
