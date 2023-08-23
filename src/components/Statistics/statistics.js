import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
  StatisticLabel,
  StatisticPercentage,
} from './statistics.styled.js';
const randColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
  {title && (
        <StatisticTitle>{title}</StatisticTitle>
      )}

  <StatisticList>
              {stats.map(({ id, label, percentage }) => (
                  <StatisticListItem key={id} style={{ backgroundColor: randColor() }}>
                      <StatisticLabel>{label}</StatisticLabel>
                      <StatisticPercentage>{percentage}%</StatisticPercentage>
    </StatisticListItem>
))}
  </StatisticList>
</StatisticSection>
  )
}