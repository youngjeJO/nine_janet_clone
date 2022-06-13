import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const Formcontainer = styled.form<{ focus: boolean }>`
  width: ${(props) => (props.focus ? '550px' : '400px')};
  height: 40px;
  border: solid 2px #9c57f5;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 500ms;
`;

const LabelBox = styled.label`
  width: 150px;
  padding-left: 25px;
  font-weight: bold;
  font-size: 14px;
`;

const InputBox = styled.input<{ focus: boolean }>`
  width: 100%;
  border: none;
  outline: none;
  height: 30px;
  ::placeholder {
    color: ${(props) => (props.focus ? '#9c57f5' : null)};
    font-weight: bold;
  }
`;
const ButtonBox = styled.button`
  margin-right: 5px;
  height: 30px;
  border: none;
  background-color: #9c57f5;
  border-radius: 100%;
  color: white;
  font-size: 20px;
  padding-top: 5px;
`;

function Search() {
  const [focus, setFocus] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const onFocus = (event: React.FormEvent<HTMLInputElement>) => {
    setFocus(true);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputVal('');
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputVal(event.currentTarget.value);
  };

  return (
    <Formcontainer focus={focus} onSubmit={onSubmit}>
      <LabelBox htmlFor=''>통합검색</LabelBox>
      <InputBox
        type='text'
        onFocus={onFocus}
        focus={focus}
        onChange={onChange}
        value={inputVal}
        placeholder='자격증 꿀팁 보러가기 #취준 #취뽀'
      />
      <ButtonBox>
        <AiOutlineSearch />
      </ButtonBox>
    </Formcontainer>
  );
}

export default Search;
