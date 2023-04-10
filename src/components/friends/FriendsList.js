
import FriendsListItem from './FriendListItem';
import css from './Friends.module.css'
import PropTypes from 'prop-types';


const FriendList = ({friends}) => {


 return (
  <ul className={css.friendsList}>
    {friends.map((friend) => {
      return <FriendsListItem key={friend.id} {...friend} />
    })}

  </ul>
 )

}

export default FriendList;

FriendList.propTypes = {
 friends: PropTypes.array.isRequired,
}