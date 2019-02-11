const path = require(`path`)
const entry = require(`./entry.js`)

exports.createPages = ({ actions }) =>
{
	const { createPage } = actions

	console.log(entry.data)

	createPage(
	{
		path: `/`,
		component: `${__dirname}/src/templates/template.js`,
		context:
		{
			data: entry.data,
		},
	})
}
