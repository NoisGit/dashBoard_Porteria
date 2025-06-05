import { useState, useCallback, useEffect } from 'react'
import Button from '@/components/ui/Button'
import Tooltip from '@/components/ui/Tooltip'
import Spinner from '@/components/ui/Spinner'
import Segment from '@/components/ui/Segment'
import { CgCodeSlash, CgCode, CgCopy } from 'react-icons/cg'
import { HiCheck } from 'react-icons/hi'
import mdDynamicImporter from '@/mdDynamicImporter'
import CodeBox from './CodeBox'

export interface CardFooterProps {
    mdPath: string
    mdName: string
    mdPrefixPath?: string
}

const CardFooter = (props: CardFooterProps) => {
    const { mdPath, mdName, mdPrefixPath = 'ui-components' } = props

    const [expand, setExpand] = useState(false)
    const [tsMarkdown, setTsMarkdown] = useState<string | null>(null)
    const [jsMarkdown, setJsMarkdown] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)
    const [loadingMd, setLoadingMd] = useState(false)
    const [mdType, setMdType] = useState('ts')

    const onExpand = useCallback(() => {
        setExpand(!expand)
    }, [expand])

    const fetchMd = async () => {
        setLoadingMd(true)
        const file = await mdDynamicImporter({
            mdPath,
            mdName,
            mdPrefixPath,
            mdType,
        })
        const response = await fetch(file.default)
        const md = await response.text()
        if (mdType === 'js') {
            setJsMarkdown(md)
        }
        if (mdType === 'ts') {
            setTsMarkdown(md)
        }
        setLoadingMd(false)
    }

    useEffect(() => {
        const markdown = mdType === 'ts' ? tsMarkdown : jsMarkdown

        if (expand && !markdown) {
            fetchMd()
        }
        if (copied && markdown) {
            navigator.clipboard.writeText(markdown.replace(/```jsx|```/g, ''))
            if (copied) {
                const copyFeedbackInterval = setTimeout(
                    () => setCopied(false),
                    3000,
                )

                return () => {
                    clearTimeout(copyFeedbackInterval)
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mdPath, expand, copied, mdType])

    const onCodeCopy = async () => {
        if (!tsMarkdown || !jsMarkdown) {
            await fetchMd()
        }
        setCopied(true)
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {expand && (
                        <Segment
                            size={'xs'}
                            value={mdType}
                            className="bg-[#ebebeb] dark:bg-gray-950 gap-1 rounded-lg"
                            onChange={(value) => setMdType(value as string)}
                        >
                            <Segment.Item className="rounded-lg" value="ts">
                                TS
                            </Segment.Item>
                            <Segment.Item className="rounded-lg" value="js">
                                JS
                            </Segment.Item>
                        </Segment>
                    )}
                    {loadingMd && <Spinner />}
                </div>
                <div className="flex items-center">
                    <Tooltip
                        title={copied ? 'Copied' : 'Copy Code'}
                        wrapperClass="mr-1"
                    >
                        <Button
                            variant="plain"
                            shape="circle"
                            size="xs"
                            icon={
                                copied ? (
                                    <HiCheck className="text-emerald-500" />
                                ) : (
                                    <CgCopy />
                                )
                            }
                            onClick={onCodeCopy}
                        />
                    </Tooltip>
                    <Tooltip title={expand ? 'Hide Code' : 'Show Code'}>
                        <Button
                            variant="plain"
                            shape="circle"
                            size="xs"
                            icon={expand ? <CgCode /> : <CgCodeSlash />}
                            onClick={() => onExpand()}
                        />
                    </Tooltip>
                </div>
            </div>
            <div className={expand ? 'block' : 'hidden'}>
                {mdType === 'ts' && (
                    <CodeBox
                        markdown={tsMarkdown as string}
                        className="text-base"
                    />
                )}
                {mdType === 'js' && (
                    <CodeBox
                        markdown={
                            (jsMarkdown as string) || (tsMarkdown as string)
                        }
                        className="text-base"
                    />
                )}
            </div>
        </div>
    )
}

export default CardFooter
