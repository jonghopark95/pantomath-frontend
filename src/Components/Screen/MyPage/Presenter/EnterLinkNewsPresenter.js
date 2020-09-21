import React from "react";
import { Title, Form } from "../Style/MyPageStyle";
import parse from "html-react-parser";
import NoNewsPresenter from "./NoNewsPresenter";

export default (props) => {
  const data = props.data;
  console.log(data.length);

  if (data.length !== 0) {
    return (
      <>
        <Title>링크 들어간 뉴스</Title>
        <Form>
          <span>카테고리</span>
          <span>키워드</span>
          <span>제목</span>
          {data.length !== 0 &&
            data.map((test) => (
              <>
                <div>{test.fields.category}</div>
                <div>{test.fields.keyword}</div>
                <div>{parse(`${test.fields.title}`)}</div>
              </>
            ))}
        </Form>
      </>
    );
  } else {
    return (
      <>
        <Title>링크 들어간 뉴스</Title>
        <NoNewsPresenter />
      </>
    );
  }
};
