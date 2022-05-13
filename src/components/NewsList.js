import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

/* const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "http://google.com/",
  urlToImage: "https://via.placeholder.com/160",
};
 */

const NewList = () => {
  const [articles, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams(); //props대신에 parameter받아오는 용도

  useEffect(() => {
    //1. callback함수 방법

    /*2.promise쓰는 방법 
    const fetchData = () => {
      setLoading(true);
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=5c9b8aa35f974b72a1d0c66118f2ce54"
        )
        .then((response) => {
          setArticle(response.data.articles);
          setLoading(false);
        });
    }; */

    //3.비동기작업 - async/await방법
    const fetchData = async () => {
      setLoading(true);
      const query =
        !params.category === "" ? "" : `&category=${params.category}`;
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=5c9b8aa35f974b72a1d0c66118f2ce54`
      );
      setArticle(response.data.articles);
      setLoading(false);
    };

    fetchData();
  }, [params]);

  if (loading) {
    return <NewsListBlock>뉴스기사 로딩중.......</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewList;
