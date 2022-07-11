import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daniel A. Caballero - Homepage</title>
        <link rel="shortcut icon" href="/images/anya-favicon.png" />
        <link rel="apple-touch-icon" href="/images/anya-favicon.png" />
        <meta name="description" content="Daniel A. Caballero" />
        <meta name="author" content="Daniel A. Caballero" />
        <meta name="author" content="cordeliasguy" />
        <meta property="og:site_name" content="Daniel A. Caballero" />
        <meta name="og:title" content="Daniel A. Caballero" />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Container marginTop={4}></Container>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
