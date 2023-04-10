import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { getRandomColor } from 'components/randomColor';

const Statistics = ({title, stats}) =>{
    return (
        <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
  

  <ul className={css.stat_list}>
     {stats.map(data => ( 
  <li className={css.item} key={data.id} style={{backgroundColor: getRandomColor()}}>
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}%</span>
    </li>))}
   
  </ul>
</section>
    )
}

export default Statistics

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}