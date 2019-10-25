import React from 'react';
import {
  Top,
  TopImage,
  TopDescription,
  DescriptionAuthor,
  Menu,
  MenuItem
} from './style'
import { digitalAbbreviation } from '@/utils'

const albumDetail = ({ currentAlbum }: any) => {
  return (
    <React.Fragment>
      <TopComponent
        coverImage={currentAlbum.coverImgUrl}
        subscribedCount={currentAlbum.subscribedCount}
        avatarUrl={currentAlbum.creator.avatarUrl}
        nickName={currentAlbum.creator.nickname}
        name={currentAlbum.name}
      />
      <MenuComponent />
    </React.Fragment>
  );
}

const TopComponent: React.FC = ({ coverImage, subscribedCount, avatarUrl, nickName, name }: any) => {
  console.log();
  return null;
  return (
    <Top background={coverImage}>
      <div className="background">
        <div className="filter"></div>
      </div>
      <TopImage>
        <img src={coverImage} alt="" />
        <p>
          <i className="iconfont">&#xe73d;</i>
          {digitalAbbreviation(subscribedCount, '万')}
        </p>
      </TopImage>
      <TopDescription>
        <h1>{name}</h1>
        <DescriptionAuthor>
          <div className="author">
            <img src={avatarUrl} alt="" />
          </div>
          <div className="name">{nickName}</div>
        </DescriptionAuthor>
      </TopDescription>
    </Top>
  );
}

// 评论、点赞、收藏、更多
const MenuComponent: React.FC = () => {
  return (
    <Menu>
      <MenuItem>
        <i className="iconfont">&#xe642;</i>
        <span>评论</span>
      </MenuItem>
      <MenuItem>
        <i className="iconfont">&#xe616;</i>
        <span>点赞</span>
      </MenuItem>
      <MenuItem>
        <i className="iconfont">&#xe609;</i>
        <span>收藏</span>
      </MenuItem>
      <MenuItem>
        <i className="iconfont">&#xe634;</i>
        <span>更多</span>
      </MenuItem>
    </Menu>
  );
}

export default React.memo(albumDetail);