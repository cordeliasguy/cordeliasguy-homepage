import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Bio Links">
    <Container>
      <Title>
        Bio Links <Badge>2021</Badge>
      </Title>
      <P>A simple straightforward page to show some of my personal links.</P>
      <P>
        Pretty similar to LinkTree, which you may have seen, but with some
        little animations in the background.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link
              href="https://bio-link-cordeliasguy.vercel.app/"
              target="_blank"
            >
              https://bio-link-cordeliasguy.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript / HTML / CSS / VantaJS / Vercel</span>
        </ListItem>
      </List>

      <WorkImage src="/images/bio-link_eyecatch.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getInitialProps } from '../../components/chakra'
