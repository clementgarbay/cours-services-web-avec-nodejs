module.exports = (app, contactsRepository) =>
  app.delete('/contacts/:id', (req, res) => {
    const id = req.params.id;

    contactsRepository
      .findAll()
      .then((contacts) => {
        const contact = contacts.find(c => c.id === id);
        if (contact) {
          contactsRepository
            .remove(id)
            .then(
              () => res.sendStatus(204),
              () => res.sendStatus(500)
            );
        } else {
          res.sendStatus(404);
        }
      });
  });
