export default class Post {

    constructor(id, nameUser, text, likes, dateTime) {
        this.id = id;
        this.nameUser = nameUser;
        this.text = text;
        this.likes = likes;
        this.dateTime = dateTime;
    }//endConstructor   

    toString() {
        return this.id + ', ' + this.nameUser + ', ' + this.text;
    }

}//endClass

export const postConverter = {
    toFirestore: (post) => {
        return {
            id: post.id,
            nameUser: post.nameUser,
            text: post.text,
            likes: post.likes,
            dateTime: post.dateTime
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Post(data.id, data.nameUser, data.text, data.likes, data.dateTime);
    }
}//endPostConverter