import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={props.maxDataPointValue}
        />
      ))}
    </div>
  );
};

export default Chart;
