import React from "react";
import styled from "styled-components";

const NewItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;
/*항목과 항목사이 스타일 설정 : &+&{}*/
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <NewItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </NewItemBlock>
  );
};

export default NewsItem;
