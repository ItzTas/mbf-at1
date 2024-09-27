import PropTypes from 'prop-types';
import styles from './topic_details.module.css';

export default function TopicDetails({ topic }) {
    return (
        <section className={styles.topicDetails}>
            <h1 className={styles.title}>{topic.title}</h1>
            <h2 className={styles.subtitle}>{topic.subtitle}</h2>
            <p className={styles.description}>{topic.description}</p>
            <div className={styles.info}>
                <span className={styles.author}>Por: {topic.author}</span>
                <span className={styles.date}>{topic.date}</span>
                <div className={styles.stats}>
                    <span className={styles.likes}>{topic.likes} Curtidas</span>
                    <span className={styles.replies}>{topic.replies} Respostas</span>
                </div>
            </div>
        </section>
    );
}

TopicDetails.propTypes = {
    topic: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        replies: PropTypes.number.isRequired,
    }).isRequired,
};
