const mdDynamicImporter = async ({
    mdPath = '',
    mdName = '',
    mdPrefixPath = 'ui-components',
    mdType = 'ts',
}) => {
    const file = await import(
        `./assets/markdown/${mdType}/${mdPrefixPath}/${mdPath}/${mdName}.md`
    )
    return file
}

export default mdDynamicImporter
