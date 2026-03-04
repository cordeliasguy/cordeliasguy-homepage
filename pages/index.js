import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a web developer based in Andorra!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Daniel A. Caballero
            </Heading>
            <p>Software Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/selfie.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I&apos;m a software developer based in Andorra. I love to create
            things and I&apos;m always looking for new ways to improve my
            skills. When not coding, I spend time hanging out with friends.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Villa Clara, Cuba.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Finished the Bachelor&apos;s Degree in Computer Science at the&nbsp;
            <Link href="https://www.uda.ad/" target="_blank">
              University of Andorra
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Finished a 6-month training contract at the University.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Finished an internship contract of 1-month at&nbsp;
            <Link href="https://limbit.io/" target="_blank">
              Limbit
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Started my current full time developer position at&nbsp;
            <Link href="https://xone.es/" target="_blank">
              byXOne
            </Link>
            .
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I Love
          </Heading>
          <Paragraph>Art, music, traveling, and learning new things.</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/cordeliasguy" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @cordeliasguy
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/daniel-a-caballero-603a3b1b8/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Daniel A. Caballero
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
