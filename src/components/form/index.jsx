import styles from './styles.module.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import FormInput from '../formInput';
import Button from './../button';
import { useState } from 'react';

const inputList = [
  { type: 'text', title: 'Name' },
  { type: 'number', title: 'Phone number' },
  { type: 'email', title: 'Email' },
];

function Form({ btn, width, inputStyles, endpoint, addData, onSubmitFunc }) {
  const [submit, setSubmit] = useState(false);

  const { register, handleSubmit } = useForm({
    mode: 'all',
  });

  const onSubmitForm = async (data) => {
    let postData = data;

    if (addData) {
      postData = { ...postData, addData };
    }

    try {
      const response = await axios.post(
        `http://localhost:3333/${endpoint}`,
        { ...postData },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.statusText === 'OK') {
        setSubmit(true);
        onSubmitFunc();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      style={{ maxWidth: width }}
      className={styles.form_wrapper}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div className={styles.form_inner}>
        {inputList.map((item, index) => (
          <FormInput
            key={index}
            register={register}
            type={item.type}
            title={item.title}
            validation={{
              required: 'Field is required',
            }}
            placeholder={item.title}
            inputStyles={{ ...inputStyles }}
          />
        ))}
      </div>
      <Button
        name={submit ? btn.nameActive : btn.nameDefault}
        defaultStyles={submit ? btn.activeStyles : btn.defaultStyles}
        hoverStyles={btn.hoverStyles}
      />
    </form>
  );
}

export default Form;
