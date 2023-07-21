import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';


const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    setComments([...comments, { text: newComment, likes: 0, dislikes: 0 }]);
    setNewComment('');
  };

  const likeComment = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes++;
    setComments(updatedComments);
  };

  const dislikeComment = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].dislikes++;
    setComments(updatedComments);
  };

  return (
    <View>
      <Text>{post.text}</Text>
      <View style={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <View key={index} style={styles.commentContainer}>
            <Text>{comment.text}</Text>
            <View style={styles.likeContainer}>
              <TouchableOpacity onPress={() => likeComment(index)}>
                <Text>Likes: {comment.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => dislikeComment(index)}>
                <Text>Dislikes: {comment.dislikes}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.addCommentContainer}>
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Add a comment"
          style={styles.commentInput}
        />
        <Button title="Add" onPress={addComment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentsContainer: {
    marginTop: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
});

export default Post;
