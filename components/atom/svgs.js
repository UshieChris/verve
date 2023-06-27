import LOGOSVG from '../../assets/svgs/righticonsvg.svg';
import {View} from 'react-native';
import Svg, { Path } from "react-native-svg"
const RightArrowSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M.574 14.983a1.216 1.216 0 0 0-.031 1.657c.219.24.51.36.803.36.279 0 .557-.108.773-.327l7.245-7.328c.219-.22.342-.526.342-.845 0-.319-.123-.624-.342-.845L2.12.327A1.076 1.076 0 0 0 .543.36a1.216 1.216 0 0 0 .03 1.658L6.984 8.5l-6.41 6.483Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default RightArrowSvg


