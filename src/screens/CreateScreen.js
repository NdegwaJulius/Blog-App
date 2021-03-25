import React,{useContext} from 'react';
import { StyleSheet} from 'react-native';
import BlogPostForm from '../Components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    
    const {addBlogPost} = useContext(Context);
    return <BlogPostForm/>
       
};

const styles = StyleSheet.create({
    
});

export default CreateScreen;