import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;

export function Profile() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 56 }}>
        <Center mt={6} px={10}>
          {isLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: "http://github.com/eduardodrozda.png" }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}
          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />
          <Input placeholder="E-mail" bg="gray.600" isDisabled />

          <Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            alignSelf="flex-start"
            mt={12}
          >
            Alterar senha
          </Heading>

          <Input placeholder="Senha antiga" bg="gray.600" secureTextEntry />
          <Input placeholder="Nova senha" bg="gray.600" secureTextEntry />
          <Input
            placeholder="Confirme a nova senha"
            bg="gray.600"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
