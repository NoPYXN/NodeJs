'use client'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

export default function SocialProfileSimple() {
  return (
    <Center py={6}>

      <Box
        maxW={'320px'}
        w={'full'}
        mx={[0, 5]}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        
        p={6}
        textAlign={'center'}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Bac STI2D
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          Lycée Richelieu
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Septembre 2019 - Juin 2021
        </Text>
      </Box>
      

      <Box
        maxW={'320px'}
        w={'full'}
        mx={[0, 5]}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          BTS SNIR
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          Lycée Agora
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Septembre 2021 - Juin 2023
        </Text>
      </Box>

      <Box
        maxW={'320px'}
        w={'full'}
        mx={[0, 5]}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Bac+3 DevOps
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          EPSI
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Septembre 2023 - Actuel
        </Text>
      </Box>
    </Center>
  )
}