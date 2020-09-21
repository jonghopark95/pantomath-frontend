import React from "react";
import { Title, Form } from "../Style/MyPageStyle";

export default (props) => {
  let data = props.data;
  console.log(data);
  return (
    <>
      <Title>읽은 뉴스</Title>
      <Form style={{ height: "300px" }}>
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
