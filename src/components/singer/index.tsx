import React from 'react'
import LazyLoad from 'react-lazyload'
import {
  SingerList,
  SingerItem,
  SingerImg,
  SingerName
} from './style'

export const ComponentSingerList = ({ list, title, name }: any) => {
  if (!list.length) return null
  return (
    <SingerList>
      <h1 className="title">{title}</h1>
      {
        list.map((item: any) => (
          <SingerItem key={item.id}>
            <SingerImg>
              <LazyLoad placeholder={<img width="100%" height="100%" src={require('@/assets/icon_user.png')} alt={item.name} />}>
                <img src={item.picUrl} width="100%" height="100%" alt={item.name} />
              </LazyLoad>
            </SingerImg>
            <SingerName>{name}：{item.name}</SingerName>
          </SingerItem>
        ))
      }
    </SingerList>
  );
}

export const ComponentAlbumList = ({ list, title, name }: any) => {
  if (!list.length) return null
  return (
    <SingerList>
      <h1 className="title">{title}</h1>
      {
        list.map((item: any) => (
          <SingerItem key={item.id}>
            <SingerImg>
              <LazyLoad placeholder={<img width="100%" height="100%" src={require('@/assets/icon_user.png')} alt={item.name} />}>
                <img src={item.coverImgUrl} width="100%" height="100%" alt={item.name} />
              </LazyLoad>
            </SingerImg>
            <SingerName>{name}：{item.name}</SingerName>
          </SingerItem>
        ))
      }
    </SingerList>
  );
}