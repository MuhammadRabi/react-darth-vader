import styled from "styled-components"

const Layout = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>
}
export default Layout

const PageWrapper = styled.main`
  padding-right: 50px;
  padding-left: 50px;
`
