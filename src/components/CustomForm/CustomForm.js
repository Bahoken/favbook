import React from 'react'
import Card from '../ui/Card/Card'
import TextBlock from '../TextBlock/TextBlock'
import CustomInput from '../ui/CustomInput/CustomInput'
import CustomButton from '../ui/CustomButton/CustomButton'

const CustomForm = ({ SubmitAction,TextHeader,CustomClass,InputTexts,InputButton }) => {
  return (
    <form onSubmit={SubmitAction} className='flex flex-col gap-2'>
        <Card CustomClass="flex flex-col justify-center align-center gap-6">
            { TextHeader && <TextBlock title={TextHeader.title} contain={TextHeader.contain} />}
            { InputTexts && InputTexts.map((InputText) => {
                return <CustomInput ref={InputText.ref} handleChange={InputText.handleChange} type={InputText.type} key={InputText.key} placeholder={InputText.placeholder} />
            })}
            {InputButton && <CustomButton handleClick={InputButton.handleClick} type={InputButton.type} text={InputButton.text} CustomClass={InputButton.CustomClass} />}
        </Card>
    </form>
  )
}

export default CustomForm