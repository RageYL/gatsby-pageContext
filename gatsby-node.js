const _        = require(`lodash`)
const path     = require(`path`)
const chokidar = require(`chokidar`)

exports.createPagesStatefully = async ({ store, actions, reporter }) =>
{
	const { createPage, deletePage } = actions

	chokidar
		.watch(`./entry.js`)
		.on(`add`, name =>
		{
			let entry = require(path.resolve(__dirname, name))

			console.log(entry.data)

			createPage(
			{
				path     : `/`,
				component: `${__dirname}/src/templates/template.js`,
				context  :
				{
					data: entry.data,
				},
			})
		})
		.on(`change`, name =>
		{
			delete require.cache[path.resolve(__dirname, name)]
			let entry = require(path.resolve(__dirname, name))

			console.log(entry.data)

			deletePage(
			{
				path     : `/`,
				component: `${__dirname}/src/templates/template.js`,
			})

			createPage(
			{
				path     : `/`,
				component: `${__dirname}/src/templates/template.js`,
				context  :
				{
					data: entry.data,
				},
			})
		})
		.on(`unlink`, name =>
		{
		})
}
