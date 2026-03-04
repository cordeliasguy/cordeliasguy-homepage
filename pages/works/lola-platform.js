import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="LOLA Platform">
    <Container>
      <Title>
        LOLA Platform <Badge>2023 - 2025</Badge>
      </Title>
      <P>
        LOLA is a digital and open IoT-driven platform designed to transform
        building management through intelligent monitoring, automation, and data
        visualization. The platform enables the creation of more sustainable and
        energy-efficient spaces by optimizing electricity and water consumption
        while reducing CO₂ emissions. Developed and brought to market by{' '}
        <Link href="https://www.simonelectric.com/" target="_blank">
          Simon
        </Link>
        , LOLA reinforces the company’s commitment to innovation and its focus
        on both professional and residential environments.
      </P>
      <P>
        I was responsible for the frontend development across the entire LOLA
        ecosystem, leading the implementation of the three core applications:
        <strong> Spaces</strong>, <strong> Facility Master</strong>, and{' '}
        <strong> Studio</strong>. This included architecting scalable React
        applications, building complex data-driven dashboards, integrating IoT
        data streams, and developing advanced visualization components for
        real-time energy analytics.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link
              href="https://www.simonelectric.com/simon-sb/plataforma-lola"
              target="_blank"
            >
              LOLA Platform
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React / JavaScript / Chart.js / Material UI / Moment.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/spaces.webp" alt="Website" />
      <WorkImage src="/images/facility_master.webp" alt="Website" />
      <WorkImage src="/images/studio.webp" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getInitialProps } from '../../components/chakra'
