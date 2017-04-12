module.exports = (commander, repositoryInjector) =>
  commander
    .command('remove <id>')
    .description('Remove a contact its given id')
    .action(id => repositoryInjector(contactRepository => contactRepository.remove(id)));
