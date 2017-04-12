module.exports = (app, contactsRepository) =>
  app.post('/contacts', (req, res) => {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
      res.sendStatus(400);
    } else {
      contactsRepository
        .insert(firstName, lastName)
        .then(
          (id) => {
            const location = `/contacts/${id}`;
            res.status(201).location(location).send(location);
          },
          () => res.sendStatus(500)
        );
    }
  });
