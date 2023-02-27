import styled from "styled-components"

const Layout = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>
}
export default Layout

const PageWrapper = styled.main`
  padding-right: 30px;
  padding-left: 30px;
  margin: auto;
`
