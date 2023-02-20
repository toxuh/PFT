import React from 'react'
import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'

const App: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        align="center"
        bg={useColorModeValue('white', 'gray.800')}
        borderBottom={1}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        borderStyle="solid"
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        px={{ base: 4 }}
        py={{ base: 2 }}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            aria-label="Toggle Navigation"
            variant="ghost"
            onClick={onToggle}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily="heading"
            fontSize="xl"
            color={useColorModeValue('gray.800', 'teal')}
          >
            PFT
          </Text>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            1
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button as="a" colorScheme="teal" variant="link" href="#">
            Sign In
          </Button>
          <Button
            as="a"
            colorScheme="teal"
            display={{ base: 'none', md: 'inline-flex' }}
            href="#"
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}

export default App
