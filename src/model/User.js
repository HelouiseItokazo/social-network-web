export default class User {

    constructor(uid, name, email, photo, dateRegister){
        this.uid = uid,
        this.name = name,
        this.email = email,
        this.photo = photo,
        this.dateRegister = dateRegister
    }//endConstructor

    toString() {
        return this.uid + ', ' + this.name + ', ' + this.email;
    }

}//endClass

export const userConverter = {
    toFirestore: (user) => {
        return {
            uid: user.uid,
            name: user.name,
            email: user.email,
            photo: user.photo,
            dateRegister: user.dateRegister
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.uid, data.name, data.email, data.photo, data.dateRegister);
    }
}//endUserConverter