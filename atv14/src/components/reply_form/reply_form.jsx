import { useState } from 'react';
import styles from './reply_form.module.css';
import PropTypes from 'prop-types';

export default function ReplyForm({ user }) {
    const [content, setContent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setContent('');
    }

    return (
        <form className={styles.replyForm} onSubmit={handleSubmit}>
            <textarea
                className={styles.textarea}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Escreva sua resposta...'
                required
            />
            <div className={styles.footer}>
                <span className={styles.userInfo}>Logado como: {user.name}</span>
                <button type='submit' className={styles.submitButton}>
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
};
