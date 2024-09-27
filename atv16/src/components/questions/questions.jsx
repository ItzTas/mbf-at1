import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@mui/material';

export default function Questions({ questions }) {
    return (
        <List>
            {questions.map((question) => (
                <ListItem key={question.id}>
                    <ListItemText
                        primary={question.user}
                        secondary={`${question.date} - ${question.question} - Resposta: ${question.answer}`}
                    />
                </ListItem>
            ))}
        </List>
    );
}

Questions.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};

