import {StatisticsStyle} from './StatisticsStyle.styled'

export const Statistics = ({ title, stats }) => (
  <StatisticsStyle>
      <section className="statistics">
  {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
            {stats.map(data => (
                <li className="item" 
                    key={data.id} 
                    >
                    <span className="label">{data.label}</span>
                    <span className="percentage"> {data.percentage}%</span>
                </li>
            ))}
        </ul>

  </section>
  </StatisticsStyle>
)