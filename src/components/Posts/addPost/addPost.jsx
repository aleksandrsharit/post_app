import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { addPost, addPostAC } from '../../../redux/posts-reducer';
import { useDispatch, useSelector } from 'react-redux';
import s from './addPost.module.css'
import { Button } from 'antd';
import Input from 'antd/es/input/Input';
import { PlusCircleTwoTone } from '@ant-design/icons';

const AddPost = () => {
  const dispatch = useDispatch();

  const initialValues = {
    'title': 'Sandra is on topic',
    'body': '',
  }

  const handleSubmit = (values, { resetForm }) => {
    const post = {
      'title': 'Sandra is on topic',
      'body': values.body,
    }
    dispatch(addPost(post));
    resetForm();
  };

  return (
    <div className={s.post_box}>
      <div className={s.post_box_child}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div className={s.formEnter}>
              <label htmlFor="body"></label>
              <Field as={Input} id="body" name="body" placeholder='enter text' className={s.formTextarea} />
            </div>
            <div className={s.post_button}>
              <Button type="primary" htmlType="submit" >
                Добавить
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}


export default AddPost;
