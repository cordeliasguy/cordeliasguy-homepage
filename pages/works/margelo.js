import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        Margelo <Badge>2022</Badge>
      </Title>
      <P>
        The corporate website for the app development and contracting agency
        based in Vienna, Austria.
      </P>
      <P>
        I made a replica of their current website, which consists of parallax
        effects inspired by Apple.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Original</Meta>
          <span>
            <Link href="https://margelo.io/" target="_blank">
              https://margelo.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link
              href="https://margelo-website-cordeliasguy.vercel.app/"
              target="_blank"
            >
              https://margelo-website-cordeliasguy.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js / TypeScript / Vercel / Formspree / Embla Carousel /
            TailwindCSS
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/margelo_eyecatch.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getInitialProps } from '../../components/chakra'
