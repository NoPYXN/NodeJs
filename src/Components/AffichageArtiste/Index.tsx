'use client'

import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs'

export function ChanteurPref() {
  const [liked, setLiked] = useState(false)

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src="Scarlxrd.jpg"
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Rappeur Anglais
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Scarlxrd
          </Heading>
          <Text color={'gray.500'} noOfLines={undefined}>
            Marius Listhrop connus sous le nom de Scalxrd, ancien youtubeur qui c'est reconverti dans la musique, il s'est fait connaître grâce à son titre HEART ATTACK et pour son style de musique atypique qui est un mélange de rap metal, trap metal et de phonk. 
          </Text>
        </Box>
      </Box>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src="Tsuki.jpg"
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Rappeur Francais
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            So la lune
          </Heading>
          <Text color={'gray.500'} noOfLines={undefined}>
            So la lune est un artiste très mystérieux qui ne prend jamais la parole, son prénom est connu par ses plus grands fans, mais il ne souhaite pas qu'il soit révéler au grand public, il s'est fait connaître grâce à son projet fissure de vie et sa voix très particulière qui divise les avis.
          </Text>
        </Box>
      </Box>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src="Laylow.jpg"
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
           <Text fontSize={'xs'} fontWeight="medium">
            Rappeur Français
          </Text>
        </Box>
        <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
          Laylow
        </Heading>
        <Text color={'gray.500'} noOfLines={undefined}>
        Jérémy Larroux, connu sous le nom de Laylow, s'est fait connaître pour ses sons particuliers, très digitaux, notamment grâce à son album Trinity. Il a la particularité de faire des albums qui ont un storytelling du début à la fin de l'album.
        </Text>
      </Box>
      </Box>
    </Center>
  )
}



export function SportifPref() {
  const [liked, setLiked] = useState(false)

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src="Cbum.png"
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Bodybuilder
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={undefined}>
            Chris Bumstead
          </Heading>
          <Text color={'gray.500'} noOfLines={undefined}>
          Chris Bumstead est un bodybuilder professionnel et le meilleur de sa catégorie actuel ! Il a gagné la plus prestigieuse compétition qui est Mister Olympia dans la catégorie Classic Physique, il est arrivé premier en 2019, 2020, 2021 et 2022 grâce à son physique monstrueux.
          </Text>
        </Box>
      </Box>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src="Charles.png"
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Athlete
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={undefined}>
            Charles Poujade
          </Heading>
          <Text color={'gray.500'} noOfLines={undefined}>
            Charles Poujade est un sportif très complet qui c'est fait connaître grâce a ses nombreux exploits, champion national de chase tag un très bon classement dans le domaine de parkour et aussi gagnant de ninja warrior 2021.  
          </Text>
        </Box>
      </Box>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src="Nick.png"
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Coach Fitness
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={undefined}>
            Nickolas Venuti
          </Heading>
          <Text color={'gray.500'} noOfLines={undefined}>
          Nickolas Venuti est un coach fitness qui est devenu un influenceur connu grâce à son physique extraordinaire.
          </Text>
        </Box>
      </Box>
    </Center>
    
  )
}

export function JeuxVideos() {
  const [liked, setLiked] = useState(false)

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src="Overwatch.png"
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              FPS
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Overwatch
          </Heading>
          <Text color={'gray.500'} noOfLines={undefined}>
          Overwatch est un jeu développé par blizzard, c'est un jeu de tir online avec une large histoire et tout un univers crée autour de chaque personnage, la particularité de ce jeu est les nombreuses capacités des héros qui permet au jeu d'être dynamique.
          </Text>
        </Box>
      </Box>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src="Eldenring.png"
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Action-RPG, Souls-like
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Elden Ring
          </Heading>
          <Text color={'gray.500'} noOfLines={undefined}>
            Elden Ring est un jeu édité par FromSoftware et sortie en 2022, c'est un jeu connu pour sa complexité grâce à ses nombreux boss complexes qui en ont fait abandonner plus d'un. Ce gigantesque open World a obtenu le titre du meilleur jeu de 2022, ce titre est largement mérité !
          </Text>
        </Box>
      </Box>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src="Rocket.png"
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              Jeux de sport
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={undefined}>
            Rocket League
          </Heading>
          <Text color={'gray.500'} noOfLines={undefined}>
          Développé par Psyonix Rocket League est un jeu de football avec des voiture plus technique que l'on ne le pense du a une prise en main assez complexe et un jeu a par des autres qui font que chaque nouveau joueur n'a aucune expérience dans ce style de jeux.
          </Text>
        </Box>
      </Box>
    </Center>
    
  )
}