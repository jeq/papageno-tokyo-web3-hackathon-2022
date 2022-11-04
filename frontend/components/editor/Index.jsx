import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";

export default function Article(props) {
  const [onEditorStateChange, setOnEditorStateChange] = useState("");
  const [content, setContent] = useState("");
  console.log(setContent);
  return (
    <div
      onClick={focus}
      css={css`
        box-sizing: border-box;
        border: 1px solid #ddd;
        cursor: text;
        padding: 16px;
        border-radius: 2px;
        margin-bottom: 2em;
        box-shadow: inset 0px 1px 8px -3px #ababab;
        background: #fefefe;
      `}
    >
      <Editor
        toolbar={{
          options: ["inline", "blockType", "list", "textAlign", "link"],
          inline: {
            options: ["bold", "strikethrough"],
          },
          blockType: {
            options: ["H2"],
          },
          list: {
            options: ["unordered"],
          },
          textAlign: {
            options: ["center"],
          },
          link: {
            options: ["link"],
          },
        }}
        onEditorStateChange={(newState) => {
          setOnEditorStateChange(newState);
          setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
        }}
      />
    </div>
  );
}
