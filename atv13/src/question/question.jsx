import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';
import styles from './question.module.css';

export default function Question({ data, onAnswer }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    function handleOptionClick(index) {
        if (!isAnswered) {
            setSelectedOption(index);
        }
    }

    function handleConfirm() {
        if (selectedOption === null) {
            return;
        }
        setIsAnswered(true);
        onAnswer(selectedOption === data.correctAnswer);
    }

    return (
        <Box className={styles.question}>
            <Typography variant='h6'>{data.question}</Typography>
            <Box className={styles.options}>
                {data.options.map((option, index) => {
                    let optionStyle = {};

                    if (isAnswered) {
                        if (index === selectedOption) {
                            optionStyle.backgroundColor =
                                selectedOption === data.correctAnswer ? '#4caf50' : '#f44336';
                        }
                        if (index === data.correctAnswer) {
                            optionStyle.backgroundColor = '#4caf50';
                        }
                    }

                    if (!isAnswered && index === selectedOption) {
                        optionStyle.backgroundColor = '#2196F3';
                    }

                    return (
                        <Button
                            key={index}
                            variant='outlined'
                            size='large'
                            className={styles.option}
                            onClick={() => handleOptionClick(index)}
                            style={{
                                ...optionStyle,
                            }}
                        >
                            {option}
                        </Button>
                    );
                })}
            </Box>
            {isAnswered ? (
                <Typography className={styles.justification}>
                    {data.justification}
                </Typography>
            ) : (
                <Button variant='contained' onClick={handleConfirm}>
                    Confirmar
                </Button>
            )}
        </Box>
    );
}

Question.propTypes = {
    data: PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        correctAnswer: PropTypes.number.isRequired,
        justification: PropTypes.string.isRequired,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
};
