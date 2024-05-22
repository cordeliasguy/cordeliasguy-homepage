import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="LOLA Admin">
    <Container>
      <Title>
        LOLA Admin <Badge>2024</Badge>
      </Title>
      <P>The admin dashboard of the LOLA Platform.</P>
      <P>
        I was responsible for the complete front-end implementation of this
        project.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React / TypeScript / Chart.js / Material UI / Luxon / OpenStreetMap
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/lola-admin_eyecatch.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getInitialProps } from '../../components/chakra'
