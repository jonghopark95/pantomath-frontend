import React from "react";
import { Title, Form } from "../Style/MyPageStyle";

export default (props) => {
  const data = props.data;
  // console.log(data);
  data.map((test) => console.log(test.fields));
  return (
    <>
      <Title>좋아요 한 뉴스</Title>
      <Form>
        <span>카테고리</span>
        <span>키워드</span>
        <span>제목</span>
        {data.map((test) => (
          <>
            <div>{test.fields.category}</div>
            <div>{test.fields.keyword}</div>
            <div>{test.fields.title}</div>
          </>
        ))}
      </Form>
    </>
  );
};
