import useStats from '../utils/useStats'
import Stats from './Stats'
import { useState } from 'react'

export default function CountrySelector() {
  // vuex  useStats数据中心
  // useStats 被两个差不多的组件复用了，大部分业务都是这样的
  // 一个数据请求在mounted发送， setStats
  const { stats: countries, loading, error } = useStats("https://covid19.mathdro.id/api/countries")
  console.log(countries) //mvvm   3次  开始一次  两个地方调用了useStats 加两次
  const [ selectedCountry, setSelectedCountry ] = useState("USA")
  if (loading) return <p>loading</p>
  if (error) return <p>出错了。。。</p>
  return (
    <div >
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={e=>{
          setSelectedCountry(e.target.value)
        }}
      >
        {
          countries.countries.map(country => (
            <option
              key={country.name}
              value={country.iso3}
              selected={country.iso3 === selectedCountry}>
              {country.iso3}
            </option>
          ))
        }
      </select>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
    </div>
  )
}
// useState 跨组件提供状态  替代redux

