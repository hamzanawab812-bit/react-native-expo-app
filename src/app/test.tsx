// import { DatePicker, Host } from "@expo/ui/swift-ui";
// import { useState } from "react";

// export default function DatePickerExample() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // A date picker fills the width it is given, so `matchContents` collapses it.
//   return (
//     <Host style={{ flex: 1 }}>
//       <DatePicker
//         title="Select a date"
//         selection={selectedDate}
//         displayedComponents={["date"]}
//         onDateChange={(date) => {
//           setSelectedDate(date);
//         }}
//       />
//     </Host>
//   );
// }
import { Text, View } from "react-native";

export default function Test() {
  return (
    <View>
      <Text>Test Screen Working!</Text>
    </View>
  );
}
