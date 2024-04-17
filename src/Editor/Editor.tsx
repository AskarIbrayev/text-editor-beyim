import { useContext, useEffect } from 'react';
import { $generateHtmlFromNodes } from '@lexical/html'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from './plugins/ToolbarPlugin';

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";


import { HtmlStringContext } from '../App'
import { ImageNode } from './nodes/imageNode/ImageNode';
import ImagesPlugin from './plugins/ImagePlugin';

import './editorStyle.css'
import { ListPlugin } from '@lexical/react/LexicalListPlugin';


const theme = {
  paragraph: 'editor-paragraph',
  placeholder: 'editor-placeholder',
}

function MyOnChangePlugin(): null {
  const [editor] = useLexicalComposerContext()
  const { setHtmlString } = useContext(HtmlStringContext)

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const html = $generateHtmlFromNodes(editor)
        setHtmlString(html)
      })
    })
  }, [editor])
  return null
}

function onError(error: Error) {
  console.error(error);
}

function Editor() {
  const initialConfig = {
    namespace: 'ArticleEditor',
    theme,
    onError,
    nodes: [
       ImageNode,
       HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
    ]
  };

  return (
    <div className='editor-container'>
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <div className='editor-inner'>
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<div className={theme.placeholder}>Введите текст...</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <HistoryPlugin />
        <AutoFocusPlugin />
        <MyOnChangePlugin />
        <ImagesPlugin />
        <ListPlugin />

      </LexicalComposer>

    </div>
  );
}

export default Editor