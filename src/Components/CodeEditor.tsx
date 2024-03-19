import { defaultKeymap } from "@codemirror/commands"
import { EditorView, keymap } from "@codemirror/view"
import * as React from "react"

export function CodeEditor() {
    return (
        <div>
            <CodeEditor1 />
        </div>
    )
}

function CodeEditor1() {
    const editorRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (editorRef.current) {
            const editorView = new EditorView({
                doc: "hello",
                extensions: [keymap.of(defaultKeymap)],
                parent: editorRef.current
            })
            return () => {
                editorView.destroy()
            }
        }
    }, [])

    return <div ref={editorRef} />
}

