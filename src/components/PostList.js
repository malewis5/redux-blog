import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { test } from "../actions";

export default function PostList() {
  const dispatch = useDispatch();
  const input = useSelector((testReducer) => testReducer.state);
  useEffect(() => {
    dispatch(test("test"));
  }, []);
  return <div>{input}</div>;
}
