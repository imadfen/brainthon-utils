import { View, Text } from "react-native";

interface HelloMessageProps {
  name?: string;
}

const HelloMessage: React.FunctionComponent<HelloMessageProps> = (props) => {
  let { name } = props;
  name = name || "World";

  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
};

export default HelloMessage;
