
let state ={
    profilePage: {
        posts:  [
            {id:1, message:'Hi!', likesCount: 5},
            {id:2, message:'My first post', likesCount: 15},
            {id:3, message:'BlaBlaBla', likesCount: 1},
            {id:4, message:'YA, YA, Naturlich!', likesCount: 444}
    ],
                 },
    dialogsPage:{
        dialogs: [
            {id:1, name:'Dimych'},
            {id:2, name:'Andrey'},
            {id:3, name:'Sveta'},
            {id:4, name:'Sasha'},
            {id:5, name:'Victor'},
            {id:6, name:'Valera'}
                 ],
        messages: [
            {id:1, message:"Hi!"},
            {id:2, message:"What?"},
            {id:3, message:"Why?"}
                ],
                 },
    sidebar: {}
};

export let addPost = (postMessage) =>{
    let newPost={
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    
    state.profilePage.posts.push(newPost);
};
export default state;