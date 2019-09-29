import React from 'react'
import {
  SingerList,
  SingerItem,
  SingerImg,
  SingerName
} from './style'

export const List = ({ list, title }: any) => {

  return (
    <SingerList>
      <h1 className="title">{title}</h1>
      {
        list.map((item: any) => (
          <SingerItem key={item.id}>
            <SingerImg>
              <img src={item.picUrl} alt="" />
            </SingerImg>
            <SingerName>歌手：{item.name}</SingerName>
          </SingerItem>
        ))
      }
    </SingerList>
  );
}