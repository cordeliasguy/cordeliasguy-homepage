import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Astro Blog">
    <Container>
      <Title>
        Astro Blog <Badge>2022</Badge>
      </Title>
      <P>
        I wanted to test Astro as soon as I knew how it works, so I decided to
        make this simple blog template.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://cordeliasguy-blog.vercel.app/" target="_blank">
              https://cordeliasguy-blog.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Astro / TypeScript / HTML / CSS / TailwindCSS / Vercel</span>
        </ListItem>
      </List>

      <WorkImage src="/images/astro-blog_eyecatch.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getInitialProps } from '../../components/chakra'
