import React from 'react';
import { useSelector } from 'react-redux';
import { getMemoList } from '../redux/memos/selectors';
import { State } from '../types/redux/user';


interface Props {
    match: {
        params:{
            id: number;
        }
    }
}
const Open = (props: Props) => {
    const selector = useSelector((state: State) => state);
    const memoList = getMemoList(selector);
    return (
        <>
            <div>{memoList[props.match.params.id].title}</div>
            <div>{memoList[props.match.params.id].content}</div>
        </>
    )
}

export default Open;