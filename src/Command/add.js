module.exports = (commander, repositoryInjector) =>
  commander
    .command('add <firstName> <lastName>')
    .description('Add a new contact')
    .action((firstName, lastName) =>
      repositoryInjector(contactRepository => contactRepository.insert(firstName, lastName))
    );
