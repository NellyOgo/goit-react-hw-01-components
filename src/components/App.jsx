import { Profile } from './Profile/profile.js';
import { Statistics } from './Statistics/statistics.js';
import { Friendlist } from './FriendList/friendList.js';
import TransactionHistory from './TransactionHistory/transactionHistory.js';
import user from '../Data/user.json'
import data from '../Data/data.json'
import friends from '../Data/friends.json'
import transactions from '../Data/transactions.json'



export const App = () => {
  return (
    <div>
<div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
    <div>
        <Statistics
          title="UPLOAD STATS"
          stats={data} />
      </div>
      <div>
        <Friendlist
          friends={friends} />
      </div>
      <div>
        <TransactionHistory
          items={transactions} />
      </div>
      </div>
  );
};