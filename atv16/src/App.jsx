import { Container } from '@mui/material';
import AppBar from './components/app_bar/app_bar.jsx';
import ProductDetail from './components/product_detail/product_detail.jsx';
import SellerInfo from './components/seller_info/seller_info.jsx';
import Comments from './components/comments/comments.jsx';
import Questions from './components/questions/questions.jsx';
import RelatedProducts from './components/related_products/related_products.jsx';

const productData = {
    name: 'Produto Exemplo',
    image: 'https://via.placeholder.com/400',
    description: 'Descrição do produto de exemplo.',
    price: 99.99,
    rating: 4.5,
};

const sellerData = {
    name: 'Vendedor Exemplo',
    email: 'vendedor@exemplo.com',
    phone: '123-456-7890',
    rating: 4.8,
};

const commentsData = [
    {
        username: 'Usuário1',
        date: '2024-09-27',
        message: 'Ótimo produto!',
        rating: 5,
    },
    {
        username: 'Usuário2',
        date: '2024-09-26',
        message: 'Vale a pena!',
        rating: 4,
    },
];

const questionsData = [
    {
        username: 'Usuário3',
        date: '2024-09-25',
        question: 'Esse produto é resistente?',
        answer: 'Sim, é feito com materiais de alta qualidade.',
    },
];

const relatedProductsData = [
    {
        name: 'Produto Relacionado 1',
        image: 'https://via.placeholder.com/400',
        price: 89.99,
    },
    {
        name: 'Produto Relacionado 2',
        image: 'https://via.placeholder.com/400',
        price: 79.99,
    },
];

function App() {
    return (
        <Container maxWidth='lg'>
            <AppBar />
            <ProductDetail product={productData} />
            <SellerInfo seller={sellerData} />
            <Comments comments={commentsData} />
            <Questions questions={questionsData} />
            <RelatedProducts products={relatedProductsData} />
        </Container>
    );
}

export default App;
