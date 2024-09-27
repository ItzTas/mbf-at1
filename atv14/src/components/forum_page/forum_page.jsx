import Header from '../header/header';
import TopicDetails from '../topic_details/topic_details';
import RepliesList from '../replies_list/replies_list';
import ReplyForm from '../reply_form/reply_form';
import styles from './forum_page.module.css';
import MenuBar from '../menu_bar/menu_bar';
import { useState } from 'react';

const defaultReplies = [
    {
        id: 1,
        author: 'Usuário456',
        date: '27 de Setembro, 2024',
        content: 'Eu gosto de usar ESLint para manter a qualidade do código.',
        likes: 10,
    },
    {
        id: 2,
        author: 'Usuário789',
        date: '28 de Setembro, 2024',
        content:
            'Sempre utilizo Prettier para formatar meu código automaticamente.',
        likes: 8,
    },
    {
        id: 3,
        author: 'Usuário101',
        date: '29 de Setembro, 2024',
        content: 'Acho que o uso de PropTypes é essencial em projetos React.',
        likes: 15,
    },
    {
        id: 4,
        author: 'Usuário112',
        date: '30 de Setembro, 2024',
        content:
            'Uma boa prática é manter os componentes pequenos e reutilizáveis.',
        likes: 12,
    },
    {
        id: 5,
        author: 'Usuário131',
        date: '01 de Outubro, 2024',
        content:
            'Eu gosto de utilizar o React Query para lidar com estados assíncronos.',
        likes: 20,
    },
];

const defaultTopic = {
    title: 'Exemplo de Tópico de Discussão',
    subtitle: 'Discussão sobre boas práticas de programação',
    description: 'Vamos compartilhar boas práticas de programação em JavaScript.',
    author: 'Usuário123',
    date: '27 de Setembro, 2024',
    likes: 120,
    replies: 5,
};

function ForumPage() {
    const [replies, setReplies] = useState(defaultReplies);
    const [topic, setTopic] = useState(defaultTopic);

    function handlerClickButton(content, name) {
        setReplies([
            ...replies,
            { id: replies.length + 1, author: name, content: content, likes: 0 },
        ]);
        const newTopic = [...topic];
        newTopic.replies++;
        setTopic(newTopic);
    }

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>
                <TopicDetails topic={topic} />
                <RepliesList replies={replies} />
                <ReplyForm
                    onClickButton={handlerClickButton}
                    user={{ name: 'Usuário Logado' }}
                />
            </main>
            <MenuBar />
        </div>
    );
}

export default ForumPage;
