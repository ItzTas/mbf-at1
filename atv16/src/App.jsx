import { Container } from '@mui/material';
import AppBar from './components/app_bar/app_bar.jsx';
import ProductDetail from './components/product_detail/product_detail.jsx';
import SellerInfo from './components/seller_info/seller_info.jsx';
import Comments from './components/comments/comments.jsx';
import Questions from './components/questions/questions.jsx';
import RelatedProducts from './components/related_products/related_products.jsx';

function App() {
    return (
        <Container maxWidth="lg">
            <AppBar />
            <ProductDetail />
            <SellerInfo />
            <Comments />
            <Questions />
            <RelatedProducts />
        </Container>
    );
}

export default App;

