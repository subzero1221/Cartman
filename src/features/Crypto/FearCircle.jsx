function FearCircle({ value }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeVal = ((value / 100) * circumference).toFixed(2);
  const dashArray = `${strokeVal} ${circumference}`;

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 70 70"
      className="transform -rotate-90"
    >
      <circle
        cx="35"
        cy="35"
        r={radius}
        fill="transparent"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="10"
      />
      <circle
        cx="35"
        cy="35"
        r={radius}
        fill="transparent"
        stroke={`url(#gradient)`}
        strokeWidth="10"
        strokeDasharray={dashArray}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#10B981", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default FearCircle;
