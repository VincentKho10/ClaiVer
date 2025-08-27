import React, { useRef, useState, useEffect } from "react";
import ModalComponent from "../../Components/ModalComponent";

function StockMasukModal(props) {
  const isChanged = useRef(false);
  let { datasState, createlastid, initmodal } = props;
  const [datas, setDatas] = datasState;
  const [formdata, setFormData] = useState(initmodal);
  const selfrom = ["Administrator", "HR", "Manager"]

  const handleFormChange = (v) => {
    let { name, value } = v.target;
    setFormData({ ...formdata, [name]: [value, formdata[name][1]] });
    isChanged.current = true;
  };

  const formfield = () => {
    return Object.keys(initmodal).map((element) => {
      const [v, t] = initmodal[element];
      // console.log(formData[element][0])
      if (element == "id") return;
      if (t == "select") {
        //console.log(formdata[element]);
        return (
          <select
            value={formdata[element][0]}
            className="select mb-2"
            onChange={(v1) => handleFormChange(v1)}
            name={element}
          >
            <option disabled={true} value={''}>
              Pick a {element}
            </option>
            {selfrom.map((v) => {
              return <option value={v}>{v}</option>;
            })}
          </select>
        );
      }
      return (
        <label className="input mb-2">
          <input
            type={t}
            className="grow"
            name={element}
            value={formdata[element][0]}
            onChange={(v1) => handleFormChange(v1)}
            placeholder={element}
          />
        </label>
      );
    });
  };

  return (
    <ModalComponent
      id="stok_masuk_create"
      formField={formfield()}
      title="Create Barcode"
      handleCreate={
        isChanged.current
          ? () => {
              const formdataonlyvalue = {};
              Object.keys(formdata).forEach((k) => {
                formdataonlyvalue[k] = formdata[k][0];
              });
              const temp = {
                ...datas,
                ...{ ...formdataonlyvalue, id: createlastid },
              };
              datas.set(createlastid.toString(), temp);
              setDatas(new Map(datas));
              createlastid += 1;
              setFormData(initmodal);
              isChanged.current = false;
              console.log(datas)
            }
          : () => {}
      }
    />
  );
}

export default StockMasukModal;
