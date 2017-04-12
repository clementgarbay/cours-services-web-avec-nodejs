module.exports = (commander, repositoryInjector) =>
  commander
    .command('list')
    .description('List all contacts')
    .action(() => repositoryInjector(contactRepository =>
      contactRepository
        .findAll()
        .then(contacts =>
          contacts
            .map(c => `${c.lastName.toUpperCase()} ${c.firstName}`)
            .forEach(c => console.log(c))
        )
    ));
