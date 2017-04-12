module.exports = (commander, repositoryInjector) =>
  commander
    .command('update <id> <firstName> <lastName>')
    .description('Update a contact')
    .action((id, firstName, lastName) =>
      repositoryInjector(contactRepository => contactRepository.update(id, firstName, lastName))
      );
