import React, { useMemo } from 'react'
import { View, List, ListItem, Title, ImageWrapper, Text } from './style'
import { digitalAbbreviation } from '@/utils'

export const RecommendList = (props: any) => useMemo(() => {
  const { list, title } = props;
  return (
    <View>
      <Title>{title}</Title>
      <List>
        {
          list.map((item: any) =>
            (<ListItem key={item.name}>
              <ImageWrapper>
                <img src={item.picUrl} alt="" />
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