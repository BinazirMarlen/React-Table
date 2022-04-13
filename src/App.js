import React, {useRef, useState} from 'react';
import Counter from './componenets/Counter';
import PostForm from './componenets/PostForm';
import PostItem from './componenets/PostItem';
import PostList from './componenets/PostList';
import MyButton from './componenets/UI/button/MyButton';
import MyInput from './componenets/UI/input/MyInput';
import MySelect from './componenets/UI/select/MySelect';
import './styles/app.css'


function App() {
  const[posts, setPost] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'fghhrth 2', body: 'Description'},
    {id: 3, title: 'ttrrrhh 3', body: 'Description'},
  ]);

  const [selectedSort, setSelectedSort] = useState('')

 const createPost =(newPost)=> {
   setPost([...posts, newPost])
 }

 const removePost = (post) => {
  setPost(posts.filter(p => p.id !== post.id))
 }
  
 const sortPosts= (sort) => {
   setSelectedSort(sort);
   setPost([...posts].sort((a, b)=>a[sort].localeCompare(),b[sort].localeCompare()))
 }
  
  return (
    <div className="App">
     <PostForm create={createPost} />
     <hr style={{margin: '15px'}}/>
     <div>
       <MySelect
        value = {selectedSort}
        onChange = {sortPosts}
        defaultValue='Sort by'
        options = {[
           {value: 'title', name: 'By name'},
           {value: 'body', name: 'By desc'},
         ]}

       />
     </div>
     {posts.length !==0
     ?
     <PostList remove = {removePost} posts={posts} title="Post List-1" />   
     :
     <h1 style={{textAlign: 'center'}}>Post not found!</h1>
     }
     
    </div>
  );
}

export default App;
