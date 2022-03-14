function ArrowDown({ color }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0, 0, 400, 400"
    >
      <g id="svgg">
        <path
          d="M62.500 135.831 C 62.500 149.095,186.697 275.000,199.782 275.000 C 213.041 275.000,337.500 149.427,337.500 136.049 C 337.500 113.039,314.094 126.758,257.930 182.689 L 200.000 240.378 142.070 182.689 C 86.106 126.958,62.500 113.056,62.500 135.831 "
          stroke="none"
          fill={color ? color : '#000000'}
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

export default ArrowDown;
