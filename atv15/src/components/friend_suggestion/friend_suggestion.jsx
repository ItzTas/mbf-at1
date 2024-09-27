import { Typography, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

export default function FriendSuggestion({ suggestions }) {
  return (
    <div>
      <Typography variant="h6">Sugestões de Amizade</Typography>
      <List>
        {suggestions.map((suggestion) => (
          <ListItem key={suggestion.id}>
            <ListItemText primary={suggestion.name} secondary={`Amigo em comum: ${suggestion.commonFriend}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

FriendSuggestion.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      commonFriend: PropTypes.string.isRequired,
    })
  ).isRequired,
};

