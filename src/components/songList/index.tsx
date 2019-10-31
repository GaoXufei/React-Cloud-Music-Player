import React from 'react'
import { View, CollectionAndAllPlayer } from './style'
import { Collection } from './style'
import { AllPlayer } from './style'
import { List, Item } from './style'
import { getNameString } from '@/utils'

const SongsList = (props: any) => {
  const { songs } = props;

  return (
    <View>
      <CollectionAndAllPlayer>
        <AllPlayerComponent />
        <CollectionComponent />
      </CollectionAndAllPlayer>
      <ListComponent list={songs} />
    </View>
  );
}

/**
 * 收藏
 * { 子组件 }
 */
const CollectionComponent = () => {
  return (
    <Collection>
      <i className="iconfont">&#xe649;</i>
      <span>收藏(7.1W)</span>
    </Collection>
  );
}

/**
 * 全部播放
 * { 子组件 }
 */
const AllPlayerComponent = () => {
  return (
    <AllPlayer>
      <i className="iconfont">&#xe62b;</i>
      <span>全部播放</span>
      <em>(共191首)</em>
    </AllPlayer>
  );
}

/**
 * 列表
 * { 子组件 }
 */
const ListComponent = ({ list }: any) => {
  return (
    <List>
      {
        list.map((item: any, index: number) => (
          <Item key={item.id}>
            <i>{index + 1}</i>
            <div>
              <p>{item.name}</p>
              <span>
                {item.ar ? getNameString(item.ar) : getNameString(item.artists)} - {item.al ? item.al.name : item.album.name}
              </span>
            </div>
          </Item>
        ))
      }
    </List>
  );
}

export default React.memo(SongsList)