import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PlaceHolderConponent from './PlaceHolderConponent';

function TinyMCEEditor() {
  const editorRef = useRef(null);
  const [isloaded,setIsloaded] = useState(false);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
    <Row>
      
    </Row>
     <Editor
        apiKey= {process.env.REACT_APP_TINY_API}
        onInit={(evt, editor) => {
            setIsloaded(true)
            editorRef.current = editor}}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
             'mentions' ,'anchor', 'autolink' ,'charmap',
             'codesample', 'emoticons' ,'image', 'link', 'lists' ,'media' ,
             'searchreplace', 'table' ,'visualblocks' ,'wordcount' ,'checklist',
              'mediaembed' ,'casechange', 'export', 'formatpainter', 'pageembed',
               'permanentpen', 'footnotes' ,'advtemplate', 'advtable', 'advcode' ,
               'editimage' ,'tableofcontents', 'mergetags', 'powerpaste', 'tinymcespellchecker' ,
               'autocorrect', 'a11ychecker', 'typography' ,'inlinecss'
          ],
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      { !isloaded && <PlaceHolderConponent/>}

    </>
  );
}

export default TinyMCEEditor;
