import { Center, Text } from "native-base";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg="gray.600" pb={6} pt={16}>
      <Text color="white" fontSize="xl" fontFamily="heading">
        {title}
      </Text>
    </Center>
  );
}
