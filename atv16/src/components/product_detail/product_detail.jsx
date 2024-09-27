import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ProductDetail({ product }) {
    return (
        <Card>
            <CardMedia component="img" height="140" image={product.image} alt={product.name} />
            <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">{product.description}</Typography>
                <Typography variant="h6">Preço: {product.price}</Typography>
                <Typography variant="body2">Nota: {product.rating}</Typography>
            </CardContent>
        </Card>
    );
}

ProductDetail.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

