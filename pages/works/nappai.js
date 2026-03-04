import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Nappai">
    <Container>
      <Title>
        Nappai <Badge>2025 - Present</Badge>
      </Title>
      <P>
        Nappai is an AI automation and orchestration platform that enables
        businesses to design, deploy, and scale intelligent workflows through a
        visual and modular interface. The platform combines data integration, AI
        agents, and process automation to streamline operations and accelerate
        the adoption of artificial intelligence across organizations.
      </P>

      <P>
        I was mainly responsible for the frontend development of the platform,
        leading the implementation of both the application dashboard and the
        public landing page. This included building dynamic workflow interfaces,
        data-driven components, and a scalable UI architecture. From time to
        time, I also contributed to backend development in .NET, supporting API
        endpoints and integration logic when required.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://nappai.ai/" target="_blank">
              https://nappai.ai/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React / TypeScript / Astro / Mermaid / ReactFlow / TailwindCSS /
            Chart.js
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/nappai_eyecatch.webp" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getInitialProps } from '../../components/chakra'
