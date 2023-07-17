import {View, Text} from 'react-native';
import styles from '../styles/headerStyle';
import { VerveLogoSvg } from './svgs';

const Header = props => {
  return (
    <View style={styles.container}>
        <View style={styles.verveLogo}>
          <VerveLogoSvg />
        </View>
    </View>
  );
};

export default Header;
