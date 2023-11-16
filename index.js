const contacts = require("./contacts.js");
const { Command } = require("commander");
const program = new Command();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      if (!oneContact) {
        throw new Error(`Sorry! Contact with id=${id} not found`);
      }
      console.log(`All right! Contact with id=${id} was found`, oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(`Contact with name=${name} added`, newContact);
      break;

    case "update":
      const updateContact = await contacts.updateContact(
        id,
        name,
        email,
        phone
      );
      if (!updateContact) {
        throw new Error(`Sorry! Contact with id=${id} not found`);
      }
      console.log(`Contact with id=${id} updated succsessful`, updateContact);
      break;

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      console.log(`Contact with id=${id} deleted`, deletedContact);
      break;

    default:
      console.warn("\x1B[31m Sorry! Unknown action type!");
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);
