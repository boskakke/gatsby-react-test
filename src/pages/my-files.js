import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      
      <div>
	      <h1>My Site's Files</h1>
	      <table>
	        <thead>
	          <tr>
	            <th>relativePath</th>
	            <th>prettySize</th>
	            <th>extension</th>
	            <th>birthTime</th>
	            <th>modifiedTime</th>
	            <th>blocks</th>
	            <th>blksize</th>
	          </tr>
	        </thead>
	        <tbody>
	          {data.allFile.edges.map(({ node }, index) => (
	            <tr key={index}>
	              <td>{node.relativePath}</td>
	              <td>{node.prettySize}</td>
	              <td>{node.extension}</td>
	              <td>{node.birthTime}</td>
	              <td>{node.modifiedTime}</td>
	              <td>{node.blocks}</td>
	              <td>{node.blksize}</td>
	            </tr>
	          ))}
	        </tbody>
	      </table>
	    </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
          modifiedTime(fromNow: true)
          blocks
          blksize
        }
      }
    }
  }
`

  