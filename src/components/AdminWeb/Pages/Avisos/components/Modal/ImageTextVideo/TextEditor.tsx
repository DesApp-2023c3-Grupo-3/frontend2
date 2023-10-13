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
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={editorHtml}
      onChange={(html) => setEditorHtml(html)}
      className="bg-white m-1 static max-h-[17em] overflow-y-auto "
    />
  );
}

export default TextEditor;
