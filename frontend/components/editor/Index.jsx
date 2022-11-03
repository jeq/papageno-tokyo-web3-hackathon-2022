import { Editor as DraftEditor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import React, { useState } from "react";

function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();

  switch (type) {
    case "blockquote":
      return "px-4 py-2 border-l-4 bg-neutral-100 text-neutral-600 border-neutral-300 quote not-italic";
  }

  return "";
}

const Editor = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [body, setBody] = useState("");
  props.setValueBody(body);

  const handleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  return (
    <div className="m-4">
      <div className="mb-1 pr-4 flex items-center mx-auto prose prose-stone">
        <div className="ml-auto flex items-center space-x-5">
          <button onClick={handleBold}>B</button>
        </div>
      </div>
      <div className="shadow-sm border border-gray-300 rounded-md sm:text-sm overflow-scroll h-[500px] p-3 prose prose-stone mx-auto">
        <DraftEditor
          editorState={editorState}
          onChange={(setEditorState, setBody)}
          placeholder="Tell a story..."
          blockStyleFn={myBlockStyleFn}
          value={body}
        />
      </div>
    </div>
  );
};

export default Editor;
