import React, { useMemo } from 'react'
import { View, List, ListItem, Title, ImageWrapper, Text } from './style'
import { digitalAbbreviation } from '@/utils'
import LazyLoad from 'react-lazyload'

export const RecommendList = (props: any) => useMemo(() => {
  const { list, title } = props;

  const enterDetail = (id: any) => props.props.history.push(`/recommend/${id}`);

  return (
    <View>
      <Title>{title}</Title>
      <List>
        {
          list.map((item: any) =>
            (<ListItem key={item.name} onClick={() => enterDetail(item.id)}>
              <ImageWrapper>
                <LazyLoad placeholder={<img src={require('@/assets/music.png')} alt="" />}>
                  <img src={item.picUrl} alt="" />
                </LazyLoad>
                <p>
                  <i className="iconfont">&#xe73d;</i>
                  {digitalAbbreviation(item.playCount, 'w')}
                </p>
              </ImageWrapper>
              <Text>{item.name}</Text>
            </ListItem>)
          )
        }
      </List>
    </View>
  );
}, [props])