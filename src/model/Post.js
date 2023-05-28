export default class Post {

    constructor(id, nameUser, text){
        this.id = id;
        this.nameUser = nameUser;
        this.text = text;
    }//endConstructor

    toString() {
        return this.id + ', ' + this.nameUser+ ', ' + this.text;
    }//endToString

   

}//endClass

export const postConverter = {
    toFirestore: (post) => {
        return {
            id: post.id,
            nameUser: post.nameUser,
            text: post.text
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Post(data.id, data.nameUser, data.text);
    }
}