import PropTypes from 'prop-types';
import styles from './reply_item.module.css';

export default function ReplyItem({ reply }) {
    return (
        <div className={styles.replyItem}>
            <p className={styles.content}>{reply.content}</p>
            <div className={styles.info}>
                <span className={styles.author}>{reply.author}</span>
                <span className={styles.date}>{reply.date}</span>
                <span className={styles.likes}>{reply.likes} Curtidas</span>
            </div>
        </div>
    );
}

ReplyItem.propTypes = {
    reply: PropTypes.shape({
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
