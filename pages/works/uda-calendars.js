import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="UdA Calendars">
    <Container>
      <Title>
        UdA Calendars <Badge>2021</Badge>
      </Title>
      <P>The current public calendars of the University of Andorra.</P>
      <P>
        I did everything from scratch, maintaining the university&apos;s design
        model.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://cals.uda.ad/" target="_blank">
              https://cals.uda.ad/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            PHP / JavaScript / FullCalendar / Bootstrap / HTML / CSS / jQuery
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/uda-calendars_eyecatch.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getInitialProps } from '../../components/chakra'
