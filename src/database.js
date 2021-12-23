import { connect } from "mongoose";

(async() => {

    try {
        const db = await connect('mongodb://localhost/crud-mongo-node');
        console.log("Base de datos conectada:", db.connection.name);
    } catch (error) {
        console.log(error);
    }

    
})();

/*
*/
