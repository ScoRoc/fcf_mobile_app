import React from 'react';
import { Text, View } from 'react-native';

// export default ArrowOutput = props => {
//   const { styles, value, unit } = props;
//   const { text, view } = styles;
//   return (
//     <View style={view}>
//       <Text style={text}>{value}</Text>
//       <Text style={text}>{unit}</Text>
//     </View>
//   );
// };

export default ArrowOutput = props => {
  const { setInputWidth, styles, value, unit } = props;
  const { text, view } = styles;
  return (
    <View onLayout={() => setInputWidth()} style={view}>
      <Text style={text}>{value}</Text>
      <Text style={text}>{unit}</Text>
    </View>
  );
};
