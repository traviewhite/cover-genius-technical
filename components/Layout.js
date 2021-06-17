import styled from 'styled-components'

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`

const Layout = ({ children }) => <Container>{children}</Container>

export default Layout
