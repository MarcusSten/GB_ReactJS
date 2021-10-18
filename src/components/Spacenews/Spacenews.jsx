import './spacenews.css';
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/actions/news";
import { NEWS_REQUEST_STATUS } from "../../store/reducers/getNews"

export default function Spacenews() {
    const { status, list } = useSelector(state => state.news);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchNews());
    }, []);

    const loadData = () => dispatch(fetchNews());

    const header = <div className="news">
        <h3>Space News!</h3>
        <Button onClick={ loadData }>Load Space News!</Button>
        </div>;

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <>
                { header }
                <div>Loading...</div>
            </>
    }

    if (status === NEWS_REQUEST_STATUS.ERROR) {
        return <>
            { header }
            <div>Error!</div>
        </>
    } else {
        return (
          <>
          { header }
          <ul className="news_list">{ list.map((el) => (
              <li className="news_list_item" key={ el.id }>{ el.title }</li>
          )) }</ul>
        </>
        )
    }
}