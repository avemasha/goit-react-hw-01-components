import PropTypes from 'prop-types';
import css from './Friends.module.css'

const FriendsListItem = ({avatar, name, isOnline, id}) => {
    // const _getStyles = (isOnline) => {
    //     if (isOnline){
    //         return {
    //             backgroundColor: 'green'
    //         } }
    //   return {
    //     backgroundColor: 'red'
    //   }
    //    }

       return (
        
        <li className={css.item} key = {id}>
       <span className={css.status} style={{backgroundColor: isOnline ? 'green' : 'red' }}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
      )

    
}

export default FriendsListItem

FriendsListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

}