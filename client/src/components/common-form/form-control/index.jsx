/* eslint-disable no-unused-vars */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Input } from '../../ui/input';
import React from 'react'
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';

// eslint-disable-next-line react/prop-types
const FormControls = ({formControls = [] , formData, setFormData}) => {

    console.log("formControls", formControls);
    const renderComponentByType = (getControlItem) =>{
        let element=null;
        const currentControlItemValue= formData?.[getControlItem?.name] || "";
       
        switch (getControlItem.componentType) {
            case "input":
              element = (
                <Input
                  id={getControlItem.name}
                  name={getControlItem.name}
                  placeholder={getControlItem.placeholder}
                  type={getControlItem.type}
                  value={currentControlItemValue}
                 className={'rounded-[10px] mt-2'}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [getControlItem.name]: event.target.value,
                    })
                  }
                />
              );
              break;
            case "select":
              element = (
                <Select
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      [getControlItem.name]: value,
                    })
                  }
                  value={currentControlItemValue}
                  className={'rounded-[10px] mt-2'}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={getControlItem.label} />
                  </SelectTrigger>
                  <SelectContent>
                    {getControlItem.options && getControlItem.options.length > 0
                      ? getControlItem.options.map((optionItem) => (
                          <SelectItem key={optionItem.id} value={optionItem.id}>
                            {optionItem.label}
                          </SelectItem>
                        ))
                      : null}
                  </SelectContent>
                </Select>
              );
              break;
            case "textarea":
              element = (
                <Textarea
                  id={getControlItem.name}
                  name={getControlItem.name}
                  placeholder={getControlItem.placeholder}
                  value={currentControlItemValue}
                  className={'rounded-[10px] mt-2'}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [getControlItem.name]: event.target.value,
                    })
                  }
                />
              );
              break;
      
            default:
              element = (
                <Input
                  id={getControlItem.name}
                  name={getControlItem.name}
                  placeholder={getControlItem.placeholder}
                  type={getControlItem.type}
                  value={currentControlItemValue}
                   className={'rounded-[10px] mt-2'}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [getControlItem.name]: event.target.value,
                    })
                  }
                />
              );
              break;
          }
      
        return element;

    }
  return (
    <div className="flex flex-col gap-3">
    {formControls.map((controleItem) => (
      <div key={controleItem.name}>
        <Label htmlFor={controleItem.name} className='mb-3'>{controleItem.label}</Label>
        {renderComponentByType(controleItem)}
      </div>
    ))}
  </div>
  )
}

export default FormControls