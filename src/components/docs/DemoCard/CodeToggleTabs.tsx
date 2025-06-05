import { useState } from 'react'
import Tabs from '@/components/ui/Tabs'
import CodeBox from './CodeBox'
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi'
import type { ReactNode } from 'react'

const { TabNav, TabList, TabContent } = Tabs

type CodeToggleTabsProps = {
    tsMarkdown?: string | null
    jsMarkdown?: string | null
    languages?: string[]
    controlledValue?: string
    codeBoxClassName?: string
    onChange?: (value: string) => void
    tsCallback?: () => ReactNode
    jsCallback?: () => ReactNode
}

const CodeToggleTabs = ({
    controlledValue,
    tsMarkdown,
    jsMarkdown,
    onChange,
    codeBoxClassName,
    languages = ['tsx', 'jsx'],
    tsCallback,
    jsCallback,
}: CodeToggleTabsProps) => {
    const [mdType, setMdType] = useState('ts')

    const handleChange = (value: string) => {
        setMdType(value)
        onChange?.(value)
    }

    return (
        <Tabs value={controlledValue || mdType} onChange={handleChange}>
            <TabList>
                <TabNav value="ts">
                    <div className="flex items-center gap-1">
                        <BiLogoTypescript className="text-2xl" />
                        <span>Typescript</span>
                    </div>
                </TabNav>
                <TabNav value="js">
                    <div className="flex items-center gap-1">
                        <BiLogoJavascript className="text-2xl" />
                        <span>Javascript</span>
                    </div>
                </TabNav>
            </TabList>
            <div className="py-0">
                <TabContent value="ts">
                    {tsCallback ? (
                        tsCallback()
                    ) : (
                        <CodeBox
                            markdown={tsMarkdown as string}
                            className={codeBoxClassName}
                            language={languages[0]}
                        />
                    )}
                </TabContent>
                <TabContent value="js">
                    {jsCallback ? (
                        jsCallback()
                    ) : (
                        <CodeBox
                            markdown={
                                (jsMarkdown as string) || (tsMarkdown as string)
                            }
                            className={codeBoxClassName}
                            language={languages[1]}
                        />
                    )}
                </TabContent>
            </div>
        </Tabs>
    )
}

export default CodeToggleTabs
