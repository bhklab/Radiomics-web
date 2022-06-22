import React from 'react';
import Layout from '../components/Layout';
import StyledPage from '../styles/StyledPage';
import news from '../data/news.json';
import styled from "styled-components";
import { Divider } from 'primereact/divider';

const StyledNews = styled.div`
    width: 80%;
    .title {
        color: gray;
        display: flex;
        align-items: center;
        height: 35px;
        font-size: 20px;
        font-weight: bold;
        margin-top: 30px;
    }
    .date{
        color: lightgray;
        display: flex;
        align-items: center;
        height: 20px;
        font-size: 12px;
        font-weight: 60;
    }
    .content {
        margin-top: 20px;
        font-size: 14px;
        font-weight: normal;
        color: white;
    }
    .divider {
        margin-bottom: 30px;
        padding-top: 10px;
    }
`;

const News = () => {
    const customizedContent = (item, i) => {
        return (
            <StyledNews key= {item.id}>
                <div className='divider'></div><Divider/>
                <div className='title'>{item.title}</div>
                <div className='date'>{item.month+ " "+ item.day + ", "+ item.year}</div>
                <div className='content'>{item.content}</div>
            </StyledNews>
        );
    }

    return (
        <Layout>
            <StyledPage>
                <h1>News</h1>
                <div className="container">
                    <StyledNews>
                        {news.map(item => (customizedContent(item)))}
                    </StyledNews>

                </div>
            </StyledPage>
        </Layout>
    )
};

export default News;
