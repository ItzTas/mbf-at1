import { useState } from 'react';
import styles from './reply_form.module.css';
import PropTypes from 'prop-types';

export default function ReplyForm({ user, onClickButton }) {
    const [content, setContent] = useState('');

    function handleClickButton(e) {
        e.preventDefault();
        if (!content.trim()) {
            return;
        }
        onClickButton(content, user.name);
        setContent('');
    }

    return (
        <form className={styles.replyForm}>
            <textarea
                className={styles.textarea}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Escreva sua resposta...'
                required
            />
            <div className={styles.footer}>
                <span className={styles.userInfo}>Logado como: {user.name}</span>
                <button
                    type='submit'
                    className={styles.submitButton}
                    onClick={(e) => {
                        handleClickButton(e);
                    }}
                >
                    Enviar
                </button>
            </div>
        </form>
    );
}

ReplyForm.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    onClickButton: PropTypes.func.isRequired,
};
