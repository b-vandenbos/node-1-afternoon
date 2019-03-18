let messages = [];
let id = 0;

module.exports = {
    create: (request, response) => {
        let {text, time} = request.body;
        let newMessage = {
            id,
            text,
            time
        }
        messages.push(newMessage);
        id++;
        response.status(200).send(messages);
    },

    read: (request, response) => {
        response.status(200).send(messages);
    },

    update: (request, response) => {
        let {text} = request.body;
        let updatedID = request.params.id;
        let messageToUpdate = messages.findIndex( message => message.id == updatedID );

        messages[messageToUpdate] = {
          id: messages[messageToUpdate].id,
          text: text || messages[messageToUpdate].text,
          time: messages[messageToUpdate].time
        };

        response.status(200).send(messages);
    },    

    delete: (request, response) => {
        let deletedID = request.params.id;
        let messageToDelete = messages.findIndex(message => message.id === deletedID);
        messages.splice(messageToDelete, 1);
        response.status(200).send(messages);
    }


}