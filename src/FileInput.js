import { useState, useRef  } from "react";
import { useController } from "react-hook-form";


function FileInput ({ control, name, textBtn, classNameBtnAdd }) {
    const { field } = useController({ control, name, rules: {required: 'добавьте файл' } });
    const [value, setValue] = useState('');

    const [showName, setshowName] = useState('');

    const fileInput = useRef(null);

    const btnSpanText = value.length > 0 ? `` : '+';

    const btnText = value.length > 0 ? `${showName[0].name}` : `${textBtn}`;


 
    return (
        <div>
        <input
          ref={fileInput}
          style={{ display: 'none' }}
          type="file"
          value={value}
          onChange={(e) =>
            {
            setValue(e.target.value);
            setshowName(e.target.files);
            field.onChange(e.target.files);
          }
        }
        />

        <button className={classNameBtnAdd} 
           onClick={() => fileInput.current.click()}>
            <span className="btn-add-file-text-plus">{btnSpanText}</span>
            {btnText} 
        </button>
        </div>
      );
    };
    
export default FileInput;
