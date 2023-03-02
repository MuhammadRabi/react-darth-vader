import styled from "styled-components"

const Wiki = () => {
  return (
    <ArticleWrapper>
      <h2>what is the virtual DOM?</h2>
      <p>
        The virtual DOM is a programming concept used in the React library for
        building user interfaces. It is a lightweight representation of the
        actual DOM (Document Object Model) tree, which is a hierarchical
        structure that represents the HTML elements on a web page.
      </p>
      <p>
        In React, instead of updating the actual DOM directly, changes are made
        to the virtual DOM first. React then compares the previous virtual DOM
        with the updated virtual DOM, identifies the differences, and only
        updates the actual DOM for the specific elements that have changed.
      </p>
      <p>
        This approach is known as "reconciliation" and helps to reduce the
        number of updates required to the actual DOM, resulting in better
        performance and faster rendering. The virtual DOM in React is
        implemented as a tree of JavaScript objects, and it is created and
        managed by React itself.
      </p>
      <p>
        It includes all of the elements, attributes, and content of the actual
        DOM, but it is not directly tied to the browser's rendering engine.
        Instead, React uses a process called "diffing" to determine which parts
        of the virtual DOM have changed and need to be updated in the actual
        DOM.
      </p>
      <p>
        By using the virtual DOM, React can provide a more efficient and
        responsive user interface, while also making it easier for developers to
        build complex web applications with fewer bugs and less code.
      </p>
    </ArticleWrapper>
  )
}
export default Wiki

const ArticleWrapper = styled.section`
  p {
    font-size: clamp(14px, 4vw, 24px);
    margin-bottom: 25px;
    background-color: rgba(255, 155, 55, 0.4);
    padding: 15px 30px;
    border-radius: 15px;
  }
`
