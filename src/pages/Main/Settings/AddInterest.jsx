import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Flex, Input, Tag, theme, Tooltip } from 'antd';
import baseURL from "../../../config.js";
import axios from 'axios';
import Swal from 'sweetalert2';

const tagInputStyle = {
  width: 104,
  height: 40,
  padding:10,
  marginInlineEnd: 8,
  verticalAlign: 'top',
  margin: '10px',
};

const App = () => {
  const { token } = theme.useToken();
  console.log(token);
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const response = await baseURL.get('/users/interest');
      setTags(response?.data?.data?.attributes);
    } catch (error) {
      console.error(error);
    }
  }
console.log(tags);
  const handleClose = async (removedTag) => {
    try {
      await baseURL.delete(`/users/interest?interestId=${removedTag?._id}`);
      const newTags = tags.filter((tag) => tag?._id !== removedTag?._id);
      setTags(newTags);
    } catch (error) {
      console.log('Error deleting tag:', error);
    }
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = async (e) => {
    if (inputValue.trim() === '') {
        // If input is empty, display an error message or take appropriate action
        console.log('Input cannot be empty');
        // confirm('Input cannot be empty');
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: 'Input cannot be empty',
        //   timer: 1500,
        // });
        return;
      }
    try {
      const addTag = await baseURL.patch('/users/interest', { title: inputValue });
      const newTag = addTag.data.data?.attributes;
      setTags([...tags, newTag]);
      setInputVisible(false);
      setInputValue('');
      fetchTags();
    } catch (error) {
      console.log(error);
    }
  };

  const tagPlusStyle = {
    padding:10,
    background: token.colorBgContainer,
    borderStyle: 'dashed',
    margin: '10px',
    marginLeft: '10px',
  };

  return (
    <Flex className='ml-5' gap="4px 0" wrap="wrap">
      {/* Rendering tags */}{tags.length > 0 && tags?.map((tag, index) => {
  const { _id, title } = tag;
  const isLongTag = tags?.length > 50;
  const tagElem = (
    <Tag
      key={_id}
      closable={index !== 0}
      onClose={() => handleClose(tag)}
      style={{
        margin: '8px',
        padding: '10px',
        border: '1px solid green',
        
      }}
    >
      <span className='bg-red'
        onDoubleClick={(e) => {
          if (index !== 0) {
            setEditInputIndex(index);
            setEditInputValue(title);
            e.preventDefault();
          }
        }}
      >
        {isLongTag ? `${title.slice(0, 50)}...` : title}
      </span>
    </Tag>
  );
  return isLongTag ? (
    <Tooltip className='ml-2' title={title} key={_id}>
      {tagElem}
    </Tooltip>
  ) : (
    tagElem
  );
})}

      {/* Input field for adding new tag */}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          required
        />
      ) : (
        <Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
          New Tag
        </Tag>
      )}
    </Flex>
  );
};

export default App;
