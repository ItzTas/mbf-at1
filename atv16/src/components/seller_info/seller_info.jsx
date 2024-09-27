import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

export default function SellerInfo({ seller }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{seller.name}</Typography>
                <Typography variant="body2">Email: {seller.email}</Typography>
                <Typography variant="body2">Telefone: {seller.phone}</Typography>
                <Typography variant="body2">Nota: {seller.rating}</Typography>
            </CardContent>
        </Card>
    );
}

SellerInfo.propTypes = {
    seller: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

