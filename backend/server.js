const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const usernames = {}; 

io.on("connection", (socket) => {

  socket.on("new_user", (username) => {
    // Lägg till användarnamnet i usernames
    
    // Du kan även lägga till så du kan komma åt det i socket-objektet.
    // Sålänge det inte heter samma som något existerande (ex. rooms, id, etc).
    // Kommentera bort och testa console.logga socket.username i "disconnect":
    // socket.username = username;

    // Skickar det uppdaterade objektet usernames till alla ansluta klienter
    io.sockets.emit("updated_users", usernames);
  })
  
  socket.on("disconnect", () => {
    // Ta bort användarnamnet i usernames
    // Kom ihåg att usernames är något backenden bör hålla reda på
    // och bara meddela frontenden om uppdateringar har skett

    // Skickar det uppdaterade objektet usernames till alla ansluta klienter
    io.sockets.emit("updated_users", usernames);
  });
});

io.listen(4000);
