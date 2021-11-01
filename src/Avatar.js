import './Avatar.css';

const Avatar = props => {
  return (
     <svg className="Avatar-container" width="185.96899" height="185.96899">
          <circle className="Avatar-circle-container" cx="93.195091" cy="93.254318" r="92.053001" />
          <g className="Avatar-tshirt" transform="matrix(0.9980332,0,0,0.9980332,-11.507941,-52.140401)">
               <path className="Avatar-tshirt-body" d="m 96.801786,193.24174 -35.701226,20.61201 -1.382169,2.43165 1.257345,9.20536 c 13.484309,7.33167 28.585104,11.18237 43.933704,11.20308 15.41031,-0.0199 30.57004,-3.90062 44.09443,-11.28772 l 1.0977,-8.93911 -1.68486,-2.82541 -38.56039,-20.39986 c 0,0 -2.85202,1.73138 -6.26637,1.69664 -3.41434,-0.0347 -6.788164,-1.69664 -6.788164,-1.69664 z" />
               <path className="Avatar-tshirt-sleeve-endings" d="m 560.94531,807.46289 -51.71679,58.64063 58.08398,-47.96094 z m -330.01367,0.80273 -5.22461,9.18946 43.83985,50.04297 z" transform="scale(0.26458333)" />
          </g>
          <g className="Avatar-profile" transform="matrix(0.9980332,0,0,0.9980332,-11.507941,-52.140401)">
               <path className="Avatar-profile-neck" d="m 96.801951,180.36463 v 12.87692 c 0,0 3.633449,1.69706 6.788239,1.69706 3.1548,0 6.26608,-1.69706 6.26608,-1.69706 v -13.39909 z" />
               <path className="Avatar-profile-head" d="m 69.464556,96.407308 3.189433,77.040282 c 0,0 13.716854,7.69499 30.830861,7.56925 17.114,-0.12574 28.98469,-7.56925 28.98469,-7.56925 l 4.14649,-78.886439 -21.78468,-3.692317 V 80.714958 l -12.60461,0.896284 c 0,0 -32.913024,15.030306 -32.762184,14.796066 z" />
          </g>
          <g className="Avatar-glasses" transform="matrix(0.9980332,0,0,0.9980332,-11.507941,-52.140401)">
               <path className="Avatar-glasses-bottom" d="m 80.718149,117.19079 a 19.510474,19.510474 0 0 0 -19.510402,19.51039 19.510474,19.510474 0 0 0 19.510402,19.5104 19.510474,19.510474 0 0 0 19.510771,-19.5104 19.510474,19.510474 0 0 0 -19.510771,-19.51039 z m 42.989501,0 a 19.510474,19.510474 0 0 0 -19.51076,19.51039 19.510474,19.510474 0 0 0 19.51076,19.5104 19.510474,19.510474 0 0 0 19.51041,-19.5104 19.510474,19.510474 0 0 0 -19.51041,-19.51039 z" />
               <path className="Avatar-glasses-top" d="m 80.718149,114.92442 a 19.510474,19.510474 0 0 0 -19.510402,19.51041 19.510474,19.510474 0 0 0 19.510402,19.51041 19.510474,19.510474 0 0 0 19.510771,-19.51041 19.510474,19.510474 0 0 0 -19.510771,-19.51041 z m 42.989501,0 a 19.510474,19.510474 0 0 0 -19.51076,19.51041 19.510474,19.510474 0 0 0 19.51076,19.51041 19.510474,19.510474 0 0 0 19.51041,-19.51041 19.510474,19.510474 0 0 0 -19.51041,-19.51041 z" />
          </g>
     </svg>
  );
}

export default Avatar;
