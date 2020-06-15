const Service = require('egg').Service;
class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;
    // use build-in http client to GET hacker-news api
    // const {data: idList} = await this.ctx.curl(`${serverUrl}`,{
    //     data: {
    //         // type: '"$'
    //         // orderBy: '"$key"',
    //         // startAt: '"${pageSize * (page - 1}"',
    //         // endAt: '"{$pageSize * page -1}"',
    //     },
    //     dataType: 'json'
    // })
    // paraller GET detail
    // const newsList = await Promise.all(
    //     Object.keys(idList).map(key => {
    //         const url = `${serverUrl}/item/${idList[key]}.json`
    //         return this.ctx.curl(url, {dataType: 'json'})
    //     })
    // )
    // return newsList.map(res => res.data)
    const musicList = await this.ctx.curl(`${serverUrl}`, { dataType: 'json' });
    return musicList;
  }
}
module.exports = NewsService;
