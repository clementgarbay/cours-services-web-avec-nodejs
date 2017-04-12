module.exports = (app, contactsManager) =>
  app.get('/contacts/:id', (req, res) => {
    const id = req.params.id;

    const contact = contactsManager.contacts.find(c => c.id === id);

    if (contact) {
      res.json(contact);
    } else {
      res.sendStatus(404);
    }
  });
