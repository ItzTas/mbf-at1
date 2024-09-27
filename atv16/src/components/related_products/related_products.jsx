import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@mui/material';

export default function RelatedProducts({ products }) {
    return (
        <List>
            {products.map((product, index) => (
                <ListItem key={index}>
                    <ListItemText
                        primary={product.name}
                        secondary={`R$ ${product.price}`}
                    />
                </ListItem>
            ))}
        </List>
    );
}

RelatedProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
