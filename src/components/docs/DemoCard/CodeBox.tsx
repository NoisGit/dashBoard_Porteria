import Markdown from 'react-markdown'
import classNames from '@/utils/classNames'
import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const CodeBox = (props: {
    markdown: string
    className?: string
    language?: string
}) => {
    const { markdown, className, language = 'tsx' } = props

    return (
        <Markdown
            className="not-prose"
            components={{
                code: (props) => (
                    <SyntaxHighlighter
                        className={classNames('not-prose text-sm', className)}
                        language={language}
                    >
                        {props.children as string}
                    </SyntaxHighlighter>
                ),
            }}
        >
            {markdown}
        </Markdown>
    )
}

export default CodeBox
