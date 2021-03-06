import React, { useState, useEffect, useMemo } from 'react'
import { View, Back, Input } from './style'
import { debounce } from '@/utils'


const Search = (props: any) => {
  const { handleBack, handleQuery, newQuery } = props;
  return (
    <View>
      <Back className="iconfont" onClick={handleBack}>&#xe6a8;</Back>
      <InputComponent newQuery={newQuery} handleQuery={handleQuery} />
    </View>
  )
}


const InputComponent = (props: any) => {
  const { handleQuery, newQuery } = props

  const [query, setQuery] = useState("");

  const clear = () => setQuery("");

  // 输入防抖，防止出现高频网络请求
  let handleQueryDebounce = useMemo(() => debounce(handleQuery, 500), [handleQuery])

  useEffect(() => {
    handleQueryDebounce(query)
    // eslint-disable-next-line
  }, [query])

  useEffect(() => {
    if (newQuery !== query) {
      setQuery(newQuery)
    }
    // eslint-disable-next-line
  }, [newQuery])

  return (
    <Input>
      <input type="text" onChange={e => setQuery(e.target.value)} value={query} placeholder="搜索歌曲，歌手，专辑" />
      <i className="iconfont" onClick={clear}>&#xe620;</i>
    </Input>
  );
}

export default React.memo(Search);