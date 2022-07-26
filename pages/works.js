import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMargelo from '../public/images/margelo_eyecatch.png'
import thumbUdaCalendars from '../public/images/uda-calendars_eyecatch.png'
import thumbBioLink from '../public/images/bio-link_eyecatch.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          2022
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
              A replica of the website of the recruitment and app development
              agency Margelo.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.1}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            2021
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="uda-calendars"
              thumbnail={thumbUdaCalendars}
              title="UdA Calendars"
            >
              The current public calendars of the University of Andorra.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="bio-link"
              thumbnail={thumbBioLink}
              title="Bio Links"
            >
              A simple website to access some of my personal links.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
