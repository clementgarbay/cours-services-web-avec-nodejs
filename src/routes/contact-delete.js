module.exports = (app, contactsManager) =>
  app.delete('/contacts/:id', (req, res) => {
    const id = req.params.id;

    const contact = contactsManager.contacts.find(c => c.id === id);

    if (contact) {
      contactsManager
        .remove(id)
        .then(
          () => res.sendStatus(204),
          () => res.sendStatus(500)
        );
    } else {
      res.sendStatus(404);
    }
  });
