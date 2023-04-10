import Profile from './components/profile/profile'
import user from './components/profile/user.json';
import data from './components/statistics/data.json'
import Statistics from './components/statistics/statistics'
import friends from './components/friends/friends.json'
import FriendList from 'components/friends/FriendsList';
import transactions from './components/transactions/transactions.json';
import TransactionHistory from 'components/transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
{/* <Statistics stats={data} /> */}
   
    < FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
    </>
  );
};

export default App;