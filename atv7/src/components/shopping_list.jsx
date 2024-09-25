import PropTypes from 'prop-types';
import styles from './shopping_list.module.css';

export default function ShoppingList({ items }) {
    function renderTotalPrice() {
        return items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    return (
        <div className={styles.shoppingList}>
            <h2 className={styles.heading}>Lista de compras</h2>
            <ul className={styles.itemList}>
                {items.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <div className={styles.itemDetail}>
                            Valor unitário: R${item.price.toFixed(2)}
                        </div>
                        <div className={styles.itemDetail}>Quantidade: {item.quantity}</div>
                        <div className={styles.itemDetail}>
                            Valor total: R${(item.price * item.quantity).toFixed(2)}
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className={styles.totalPrice}>Preço total: R${renderTotalPrice()}</h3>
        </div>
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
