module.exports = (app, contactsRepository) =>
  app.put('/contacts/:id', (req, res) => {
    const { firstName, lastName } = req.body;
    const id = req.params.id;
    
    if (!firstName || !lastName) {
      res.sendStatus(400);
    } else {
      contactsRepository
        .update(id, firstName, lastName)
        .then(
          (id) => {
            const location = `/contacts/${id}`;
            res.status(201).location(location).send(location);
          },
          () => res.sendStatus(500)
        );
    }

    contactsRepository
      .findAll()
      .then(contacts => res.json(contacts));
  });
