import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import CodeMirror from '@uiw/react-codemirror';
import * as React from "react";


interface ICodeEditorProps {
    value: string;
    onChange: (value: string) => void;
    height?: string;
}

export function CodeEditor(props: ICodeEditorProps) {
    const myTheme = createTheme({
        theme: 'light',
        settings: {
            gutterBorder: '#F1F5F9', // Gray-200
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            background: '#F1F5F9', // Gray-100
            foreground: '#334155', // Gray-700
            caret: '#1E293B', // Gray-800
            selection: '#CBD5E1', // Gray-300
            selectionMatch: '#036dd626',
            lineHighlight: '#8a91991a',
            gutterBackground: '#F1F5F9', // Gray-100
            gutterForeground: '#334155', // Gray-500
        },
        styles: [
            { tag: t.comment, color: '#787b8099' },
            { tag: t.variableName, color: '#0080ff' },
            { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
            { tag: t.number, color: '#5c6166' },
            { tag: t.bool, color: '#5c6166' },
            { tag: t.null, color: '#5c6166' },
            { tag: t.keyword, color: '#5c6166' },
            { tag: t.operator, color: '#5c6166' },
            { tag: t.className, color: '#5c6166' },
            { tag: t.definition(t.typeName), color: '#5c6166' },
            { tag: t.typeName, color: '#5c6166' },
            { tag: t.angleBracket, color: '#5c6166' },
            { tag: t.tagName, color: '#5c6166' },
            { tag: t.attributeName, color: '#5c6166' },
        ],
    });
    return <div className='w-[750px]'>
        <CodeMirror
            value={props.value}
            height={props.height}
            onChange={(value: string) => props.onChange(value)}
            theme={myTheme}
        />
    </div>
}

