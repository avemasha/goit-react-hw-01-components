import PropTypes from 'prop-types';
import css from './Transactions.module.css'


const TransactionHistory = ({items}) =>
{
    return (
      < section className ={css.table}>
     <table className={css.transaction_history}>
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<tbody> {items.map(item => (
        <tr key= {item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
      ))}
      </tbody>
  </table>
  </section>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    items:  PropTypes.array.isRequired,
}