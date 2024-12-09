import "./Chart.css";

const Chart = ({ vote_rating }) => {
  const circleWidth = 80;
  const circleHeight = 80;
  const radius = 18;
  const rating = parseFloat(vote_rating.toFixed(1) * 10); // Round to one decimal place

  const dashArray = 2 * Math.PI * radius;
  const dashOffSet = dashArray - (dashArray * rating) / 100;
  const getColor = (rating) => {
    if (rating < 30) return "#ef5350"; // Red for low values
    if (rating < 70) return "#fdd835"; // Orange for mid-range values
    if (rating > 70 && rating <= 100) return "#4caf50"; // Green for high values
  };
  const color = getColor(rating);

  return (
    <div className="relative z-10 -mt-6 -ml-6 md:-ml-6 md:-mt-6">
      <svg
        width={circleWidth}
        height={circleHeight}
        viewBox={`0 0 ${circleWidth} ${circleHeight}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleHeight / 2}
          // strokeWidth="2"
          r={radius}
          className="circle-background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleHeight / 2}
          // strokeWidth="6"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffSet,
            stroke: color,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleHeight / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3rem"
          textAnchor="middle"
          style={{ fill: "#ffffff" }}
          className="circle-text"
        >
          {rating}%
        </text>
      </svg>
    </div>
  );
};

export default Chart;
