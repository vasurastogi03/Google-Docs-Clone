import mongoose  from 'mongoose';

const Connection = async (username = 'user', password = 'Password123') => {
    const URL = `mongodb://${username}:${password}@ac-iuz7ima-shard-00-00.uo7zhab.mongodb.net:27017,ac-iuz7ima-shard-00-01.uo7zhab.mongodb.net:27017,ac-iuz7ima-shard-00-02.uo7zhab.mongodb.net:27017/?ssl=true&replicaSet=atlas-jc4pcc-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;