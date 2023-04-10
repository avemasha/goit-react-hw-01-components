import PropTypes from 'prop-types';
// import user from './user.json';
// import Stats from './stats';
import css from "./Profile.module.css"


const Profile = ({ username, tag, location, avatar, stats }) =>
{
    return (
        <div className ={css.profile}>
  <div className ="description">
    <img
      src={avatar}
      alt="User avatar"
      className ={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className ={css.stats}>
  <li className={css.statisticItem}  >
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
       <li className={css.statisticItem} >
       <span className={css.label}>Views</span>
       <span className={css.quantity}>{stats.views}</span>
     </li>
      <li className={css.statisticItem} >
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile;

Profile.propTypes = {
    
	username: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
   

}