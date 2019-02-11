module.exports =
{
	plugins:
	[
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options:
			{
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
		},
	],
}
