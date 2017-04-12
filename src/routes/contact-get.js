module.exports = (app, contactsManager) =>
  app.get('/contacts/:id', (req, res) => {
    const id = req.params.id;

    contactsManager
      .contacts()
      .then((contacts) => {
        const contact = contacts.find(c => c.id === id);

        if (contact) {
          res.json(contact);
        } else {
          res.sendStatus(404);
        }
      });
  });
