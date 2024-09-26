import PropTypes from 'prop-types';
import { Box, Typography, List, ListItem, Divider, Paper } from '@mui/material';

export default function ShoppingList({ items }) {
    function renderTotalPrice() {
        return items
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    }

    return (
        <Box
            sx={{
                padding: '20px',
                backgroundColor: 'background.default',
                color: 'text.primary',
                fontSize: { xs: '1.04rem', sm: '1.2rem' },
            }}
            component={Paper}
        >
            <Typography variant='h4' color='primary' gutterBottom>
                Lista de compras
            </Typography>
            <List>
                {items.map((item) => (
                    <ListItem
                        key={item.id}
                        divider
                        sx={{
                            '&:hover': {
                                backgroundColor: 'action.hover',
                                cursor: 'pointer',
                            },
                            transition: 'background-color 0.3s ease',
                        }}
                    >
                        <Box sx={{ width: '100%' }}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                {item.name}
                            </Typography>
                            <Typography variant='body1'>
                                Valor unitário: R${item.price.toFixed(2)}
                            </Typography>
                            <Typography variant='body1'>
                                Quantidade: {item.quantity}
                            </Typography>
                            <Typography variant='body1'>
                                Valor total: R${(item.price * item.quantity).toFixed(2)}
                            </Typography>
                        </Box>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ my: 2 }} />
            <Typography variant='h5' color='primary'>
                Preço total: R${renderTotalPrice()}
            </Typography>
        </Box>
    );
}

ShoppingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
