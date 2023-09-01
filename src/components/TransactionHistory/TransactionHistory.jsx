import { TransactionHistoryStyle } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => (
    <TransactionHistoryStyle>
      
        <thead className='transation-title'>
            <tr >
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className='transation-tbody'>
            {transactions.map(({id, type, amount, currency}) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
            ))}
        </tbody>
            
    </TransactionHistoryStyle>
);