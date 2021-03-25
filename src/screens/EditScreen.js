import React,{ useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../Components/BlogPostForm';
import { Context } from '../context/BlogContext';


const EditScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
  
    return (
    <BlogPostForm 
    initialValues= {{title: blogPost.title, content: blogPost.content}}
    onSubmit={(title,content) =>{
        addBlogPost(title,content, () => navigation.navigate('Index'))
    }}/>);
};

const styles = StyleSheet.create({
    
});

export default EditScreen;