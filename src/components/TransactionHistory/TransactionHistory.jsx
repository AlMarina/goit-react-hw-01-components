
import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({items}) => { 
    return (
<table className={css.transaction_history}>
  <thead className={css.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }) =>
            <tr key={id} className={css.tr }>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>)}
    </tbody>
</table>
)
}

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}