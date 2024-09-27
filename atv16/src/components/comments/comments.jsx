import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@mui/material';

export default function Comments({ comments }) {
    return (
        <List>
            {comments.map((comment) => (
                <ListItem key={comment.id}>
                    <ListItemText
                        primary={comment.user}
                        secondary={`${comment.date} - ${comment.message} - Nota: ${comment.rating}`}
                    />
                </ListItem>
            ))}
        </List>
    );
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
};

