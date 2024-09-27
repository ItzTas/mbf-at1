import styles from './menu_bar.module.css';

export default function MenuBar() {
    const topics = {
        recent: [
            'Tópico Recente 1',
            'Tópico Recente 2',
            'Tópico Recente 3',
            'Tópico Recente 4',
            'Tópico Recente 5',
        ],
        popular: [
            'Tópico Popular 1',
            'Tópico Popular 2',
            'Tópico Popular 3',
            'Tópico Popular 4',
            'Tópico Popular 5',
        ],
        liked: [
            'Tópico Curtido 1',
            'Tópico Curtido 2',
            'Tópico Curtido 3',
            'Tópico Curtido 4',
            'Tópico Curtido 5',
        ],
    };

    return (
        <aside className={styles.sidebar}>
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Tópicos Recentes</h3>
                <ul>
                    {topics.recent.map((topic, index) => (
                        <li key={index} className={styles.item}>
                            {topic}
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Tópicos Populares</h3>
                <ul>
                    {topics.popular.map((topic, index) => (
                        <li key={index} className={styles.item}>
                            {topic}
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Tópicos Mais Curtidos</h3>
                <ul>
                    {topics.liked.map((topic, index) => (
                        <li key={index} className={styles.item}>
                            {topic}
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}
