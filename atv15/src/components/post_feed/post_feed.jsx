import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import Post from '../post/post';

export default function PostFeed({ posts }) {
    return (
        <Stack spacing={2}>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </Stack>
    );
}

PostFeed.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            shares: PropTypes.number.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    author: PropTypes.string.isRequired,
                }),
            ).isRequired,
        }),
    ).isRequired,
};
