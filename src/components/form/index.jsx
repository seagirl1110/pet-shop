import styles from './styles.module.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import FormInput from '../formInput';
import Button from './../button';
import { useState } from 'react';

const inputList = [
  { type: 'text', title: 'Name' },
  { type: 'text', title: 'Phone number' },
  { type: 'email', title: 'Email' },
];

function Form({ btn, width, inputStyles, endpoint }) {
  const [submit, setSubmit] = useState(false);

  const { register, handleSubmit } = useForm({
    mode: 'all',
  });

  const onSubmitForm = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:3333/${endpoint}`,
        { ...data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.statusText === 'OK') {
        setSubmit(true);
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
