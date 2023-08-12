import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box, View, useTheme } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[700] }}>
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
