import {FormEvent, FormEventHandler, memo, MutableRefObject, useCallback, useRef} from 'react';
import {Editor} from '../../core/editor/editor';
import s from './'

interface AppProps {
  className?: string;
}

function App({className}: AppProps) {
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;

  const editor = new Editor(divRef.current);

  const onChange = useCallback((e: FormEvent<HTMLDivElement>) => {
    console.log(e);
    const target = e.target as HTMLDivElement;
    if (target.innerHTML) {
      const value = target.innerHTML;
      if (value) {
        editor.setContent(value);
      }
    }
    editor.test();
  }, []);


  return (
    <div dangerouslySetInnerHTML={{__html: editor.getContent()}} onInput={onChange} contentEditable ref={divRef}/>
  );
}

export default memo(App);
