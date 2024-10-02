// TextEditor.tsx
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
  editorHtml: string;
  setEditorHtml: (newText: string) => void;
}

function TextEditor({ editorHtml, setEditorHtml }: TextEditorProps) {
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
    <div className="flex items-center justify-center rounded-2xl md:w-[330px] md:h-[300px] h-[450px] bg-[#D9D9D9]">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorHtml}
        onChange={(html) => setEditorHtml(html)}
        className="rounded-2xl border-[1px] scrollbar-none overflow-y-scroll bg-white h-[450px] md:w-[310px] md:h-[285px]"
      />
    </div>
  );
}

export default TextEditor;
