import { Typography, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <div>
      <Typography variant="h6">Amigos</Typography>
      <List>
        {friends.map((friend) => (
          <ListItem key={friend.id}>
            <ListItemText primary={friend.name} secondary={`${friend.commonFriends} amigos em comum`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      commonFriends: PropTypes.number.isRequired,
    })
  ).isRequired,
};

