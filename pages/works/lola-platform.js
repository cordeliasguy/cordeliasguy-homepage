import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="LOLA Platform">
    <Container>
      <Title>
        LOLA Platform <Badge>2023</Badge>
      </Title>
      <P>
        LOLA is a digital and open platform, which presents management solutions
        for buildings driven by IoT technology, and allows the creation of
        sustainable spaces, reducing energy and water consumption and CO2
        emissions.&nbsp;
        <Link href="https://www.simonelectric.com/" target="_blank">
          Simon
        </Link>
        &nbsp;brings it closer to the market in his desire to reaffirm his
        commitment to innovation and focus on both the professional and
        residential user.
      </P>
      <P>
        I was responsible for practically the complete front-end implementation
        of this project.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React / JavaScript / Chart.js / Material UI / Moment.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/lola-platform_eyecatch.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getInitialProps } from '../../components/chakra'
