import   React     from "react"
import { graphql } from "gatsby"

class Template extends React.Component
{
	render()
	{
		let { data } = this.props.pageContext

		console.log(data)

		return <div />
	}
}

export default Template

export const query = graphql
`
	query
	{
		allMarkdownRemark
		{
			edges
			{
				node
				{
					htmlAst
				}
			}
		}
	}
`
