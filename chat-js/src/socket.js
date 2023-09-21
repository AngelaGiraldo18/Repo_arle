module.exports = (io) => {
    let nickNames = [];

    io.on('connection', (socket) => {
        console.log('Nuevo usuario conectado');

        socket.on('enviar mensaje', (datos) => {
            io.emit('nuevo mensaje', {
                msg: datos,
                username: socket.nickname // Cambiado de socket.nickName a socket.nickname
            });
        });

        socket.on('nuevo usuario', (datos, callback) => {
            if (nickNames.indexOf(datos) != -1) {
                callback(false);
            } else {
                callback(true);
                socket.nickname = datos; // Cambiado de socket.nickName a socket.nickname
                nickNames.push(socket.nickname);
                io.emit('nombre usuario', nickNames);
            }
        });

        socket.on('disconnect', () => {
            if (socket.nickname) {
                nickNames.splice(nickNames.indexOf(socket.nickname), 1);
                io.emit('nombre usuario', nickNames);
            }
        });
        socket.on('disconnect',datos =>{
            if (!socket.nickname) {
                return
            }else{
                nickNames.splice(nickNames.indexOf(socket.nickName),1);
                io.emit('nombre usuario', nickNames);
            }
        })
    });
};
