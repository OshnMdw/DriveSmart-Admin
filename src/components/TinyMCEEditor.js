import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PlaceHolderConponent from './PlaceHolderConponent';
import { Row } from 'react-bootstrap';
import axios from "axios";
import { useLocation } from "react-router-dom";

function TinyMCEEditor() {
  const editorRef = useRef(null);
  const [isloaded,setIsloaded] = useState(false);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const { search } = useLocation();

  const query = React.useMemo(() => new URLSearchParams(search), [search]);
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getTopics")
      .then((headings) => setHeadings(headings.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Row>
      
    </Row>
     <Editor
        apiKey= {process.env.REACT_APP_TINY_API}
        onInit={(evt, editor) => {
            setIsloaded(true)
            editorRef.current = editor}}
        initialValue={headings.find(item => item.no==query.get("id"))?.script}
        init={{
          height: 500,
          menubar: false,
          // plugins: [
          //    'mentions' ,'anchor', 'autolink' ,'charmap',
          //    'codesample', 'emoticons' ,'image', 'link', 'lists' ,'media' ,
          //    'searchreplace', 'table' ,'visualblocks' ,'wordcount' ,'checklist',
          //     'mediaembed' ,'casechange', 'export', 'formatpainter', 'pageembed',
          //      'permanentpen', 'footnotes' ,'advtemplate', 'advtable', 'advcode' ,
          //      'editimage' ,'tableofcontents', 'mergetags', 'powerpaste', 'tinymcespellchecker' ,
          //      'autocorrect', 'a11ychecker', 'typography' ,'inlinecss'
          // ],
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      { !isloaded && <PlaceHolderConponent/>}

    </>
  );
}

export default TinyMCEEditor;
