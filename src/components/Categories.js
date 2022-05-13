import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "general", text: "일반" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테이먼트" },
  { name: "health", text: "건강" },
  { name: "sports", text: "스포트" },
  { name: "science", text: "과학" },
  { name: "technology", text: "기술" },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media sceen and(max-width:768px) {
    width: 100%;
    over-x: auto;
  }
`;
const Category = styled(NavLink)`
  font-size: 1.123rem;
  cursor: pointer;
  white-space: pre;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  &.active {
    front-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;
const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name} to={c.name === "all" ? "/" : `/${c.name}`}>
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
