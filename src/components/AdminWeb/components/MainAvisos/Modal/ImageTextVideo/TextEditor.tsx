// TextEditor.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo para el editor

function TextEditor() {
  const [editorHtml, setEditorHtml] = useState<string>('');

  const modules = {
    toolbar: [
      [{ size: [] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline'],
      [{ font: [] }],
      [{ color: [] }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'font',
    'list',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'color',
    'size',
  ];

  return (
    <div className="flex-row h-[300px]">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorHtml}
        onChange={(html) => setEditorHtml(html)}
        className="bg-white flex-row m-3"
      />
    </div>
  );
}

export default TextEditor;
