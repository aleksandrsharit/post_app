import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../../../redux/posts-reducer';
import s from './editPost.module.css';
import { Button, Input } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';

const EditPost = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [post, setPost] = useState(props.body);
    const dispatch = useDispatch();

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(editPost(post, props.id));
    }

    const deletedPost = () => {
        dispatch(deletePost(props.id));
    }

    const onPostChange = (e) => {
        setPost(e.currentTarget.value);
    }

    return (
        <div>
            {editMode ? (
                <div>
                    <div>
                        <Input
                            onChange={onPostChange}
                            showCount
                            className={s.inputClass}
                            onBlur={deactivateEditMode}
                        />
                    </div>
                    <div>
                        <Button onClick={deactivateEditMode}>
                            <PlusCircleTwoTone />
                            Apply
                        </Button>
                    </div>
                </div>
            ) : (
                <div>
                    <span>{props.body || '-----'}</span>
                    <div className={s.button}>
                        <Button onClick={activateEditMode} ghost >Redact</Button>
                    </div>
                    <div>
                        <Button onClick={deletedPost} type="primary" danger ghost>
                            Delete
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditPost;
