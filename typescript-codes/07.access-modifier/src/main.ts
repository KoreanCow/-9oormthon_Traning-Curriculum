class Post {
    constructor(
        public id: number = 0,
        protected title: string = ''
    ) { }

    getPost() {
        return `postId ${this.id}, postTitle: ${this.title}`;
    }
}

class PostB extends Post {
    getPost() {
        return this.id;
    }
}



const post: Post = new Post(1, "title 1");



console.log(post.id); // 1
console.log(post.title); // "title 1"