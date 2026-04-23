const post = {
    username: "ashleyfarai",
    caption: "Just mastered my JavaScript objects!",
    likes: 120,
    comments: ["Uh...OK", "Awesome" , "Nerd Alert!"],
    
    // increase likes
    addLike() {
        this.likes++;
    }
};
post.addLike();

//  we destructure our objects
const { username, caption, comments } = post;
console.log(`Username: ${username}`);
console.log(`Caption: ${caption}`);
console.log(`Updated Likes: ${post.likes}`);
console.log(`Comments ${post.comments}`);