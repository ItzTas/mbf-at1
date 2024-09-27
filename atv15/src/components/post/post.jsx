import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Comments from '../comments/comments';

export default function Post({ post }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
        <Typography variant="caption" display="block">
          {post.date} por {post.author}
        </Typography>
        <Typography variant="body2">Curtidas: {post.likes}</Typography>
        <Typography variant="body2">Compartilhamentos: {post.shares}</Typography>
        <Comments comments={post.comments} />
      </CardContent>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

