import { Container, Typography } from '@mui/material';
import styles from './App.module.css';
import './index.css';
import Question from './question/question';
import { useState } from 'react';

const quizData = [
    {
        question: 'O que é design responsivo?',
        options: [
            'Ajuste de imagens para telas maiores',
            'Uso de media queries para adaptar o layout',
            'Estilos em cascata para navegadores',
            'Uso de fontes customizadas',
        ],
        correctAnswer: 1,
        justification:
            'O design responsivo utiliza media queries para ajustar o layout conforme o tamanho da tela.',
    },
    {
        question: 'O que é Mobile-First?',
        options: [
            'Desenvolver para desktop primeiro',
            'Usar imagens grandes para celular',
            'Desenvolver primeiro para dispositivos móveis',
            'Não usar media queries',
        ],
        correctAnswer: 2,
        justification:
            'O Mobile-First é uma abordagem de desenvolvimento que prioriza a experiência em dispositivos móveis.',
    },
    {
        question: 'Qual é uma boa prática ao desenvolver com Mobile-First?',
        options: [
            'Adicionar estilos específicos para dispositivos móveis após terminar o design desktop.',
            'Criar uma versão desktop e adaptá-la para o mobile.',
            'Definir estilos básicos para dispositivos móveis e depois usar media queries para telas maiores.',
            'Evitar o uso de media queries e focar apenas em design responsivo.',
        ],
        correctAnswer: 2,
        justification:
            'No Mobile-First, começamos com estilos básicos para dispositivos móveis e usamos media queries para adaptar o layout a telas maiores.',
    },
    {
        question: 'O que é um breakpoint?',
        options: [
            'Um erro no código CSS',
            'Um ponto de parada no código JavaScript',
            'Uma medida para ajustar layouts baseados no tamanho da tela',
            'Um estilo específico para dispositivos móveis',
        ],
        correctAnswer: 2,
        justification:
            'Breakpoints são pontos definidos no CSS onde o layout muda para se adaptar a diferentes tamanhos de tela.',
    },
    {
        question:
            'Qual a vantagem de usar unidades relativas como "em" ou "%" em design responsivo?',
        options: [
            'Elas são mais rápidas que unidades absolutas.',
            'Elas permitem que os elementos se adaptem melhor a diferentes tamanhos de tela.',
            'Elas substituem media queries.',
            'Elas são exclusivas para dispositivos móveis.',
        ],
        correctAnswer: 1,
        justification:
            'Unidades relativas ajudam a criar layouts flexíveis e adaptáveis, permitindo melhor responsividade em diferentes tamanhos de tela.',
    },
    {
        question: 'Qual é o propósito principal das media queries?',
        options: [
            'Alterar o comportamento do JavaScript.',
            'Detectar eventos do mouse.',
            'Aplicar estilos CSS diferentes com base nas características do dispositivo.',
            'Reduzir o tamanho das imagens.',
        ],
        correctAnswer: 2,
        justification:
            'As media queries permitem aplicar diferentes estilos com base em características como largura da tela, orientação e resolução.',
    },
    {
        question: 'O que significa "viewport" em desenvolvimento web?',
        options: [
            'O tamanho da tela do dispositivo.',
            'A área visível de uma página da web no navegador.',
            'A resolução de uma imagem.',
            'A quantidade de memória disponível no dispositivo.',
        ],
        correctAnswer: 1,
        justification:
            'A viewport refere-se à área visível de uma página da web no navegador, essencial para controle de layout e design responsivo.',
    },
    {
        question: 'Qual é a finalidade do atributo "viewport" na tag <meta>?',
        options: [
            'Aumentar a resolução de imagens.',
            'Controlar o comportamento da renderização em dispositivos móveis.',
            'Desativar estilos CSS.',
            'Ajustar o tempo de carregamento da página.',
        ],
        correctAnswer: 1,
        justification:
            'O atributo "viewport" na tag <meta> controla como o conteúdo da página é exibido em diferentes tamanhos de tela, especialmente em dispositivos móveis.',
    },
    {
        question:
            'Qual é uma característica importante da usabilidade em dispositivos móveis?',
        options: [
            'Links pequenos e próximos uns dos outros.',
            'Botões grandes e de fácil acesso.',
            'Muitas imagens de alta resolução.',
            'Navegação apenas com gestos complexos.',
        ],
        correctAnswer: 1,
        justification:
            'Botões grandes e de fácil acesso melhoram a usabilidade em dispositivos móveis, facilitando a interação com os elementos da interface.',
    },
    {
        question:
            'Qual prática ajuda a melhorar a performance de um site em dispositivos móveis?',
        options: [
            'Usar muitas fontes personalizadas.',
            'Carregar todas as imagens de uma vez.',
            'Carregamento lento (lazy loading) para imagens e recursos pesados.',
            'Usar vídeos em background.',
        ],
        correctAnswer: 2,
        justification:
            'O carregamento lento (lazy loading) ajuda a melhorar a performance, carregando apenas os recursos necessários conforme o usuário navega pela página.',
    },
];

export default function App() {
    const [score, setScore] = useState(0);
    function handleScore(isCorrect) {
        if (isCorrect) {
            setScore(score + 1);
        }
    }

    return (
        <>
            <Container className={styles.container}>
                {quizData.map((data, i) => {
                    return <Question onAnswer={handleScore} key={i} data={data} />;
                })}
            </Container>
            <div className={styles.wrapper}>
                <span className={styles.score}>Score: {score}</span>
            </div>
        </>
    );
}
