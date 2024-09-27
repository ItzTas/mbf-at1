import PropTypes from 'prop-types';
import ReplyItem from '../reply_item/reply_item';
import styles from './replies_list.module.css';

export default function RepliesList({ replies }) {
    return (
        <section className={styles.repliesList}>
            {replies.map((reply) => (
                <ReplyItem key={reply.id} reply={reply} />
            ))}
        </section>
    );
}

RepliesList.propTypes = {
    replies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
