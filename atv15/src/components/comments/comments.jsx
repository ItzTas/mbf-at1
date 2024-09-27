import { List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

export default function Comments({ comments }) {
  return (
    <List>
      {comments.map((comment, index) => (
        <ListItem key={index}>
          <ListItemText primary={comment.text} secondary={comment.author} />
        </ListItem>
      ))}
    </List>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

