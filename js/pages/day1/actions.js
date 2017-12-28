import _ from 'lodash'
import { BaseActions } from '../../components'

export default class Actions extends BaseActions {
  _doLeftPress() {
    const { leftText } = this.state
    if (leftText === '计次') {
      const time = `${this.state.upMinutes}:${this.state.upMiles}`
      const index = this.state.records.length
      this.state.records.unshift({ time, index })
      this.setState({ records: _.cloneDeepWith(this.state.records) }, () => {
        this.nextTime = new Date().getTime()
      })
    } else {
      this.setState({
        upMinutes: '00', upMiles: '00.00', downMinutes: '00', downMiles: '00.00', leftText: '复位', rightText: '启动', records: [],
      })
    }
  }

  _doRightPress() {
    let { rightText, leftText } = this.state
    if (rightText === '启动') {
      if (this.up || this.down) {
        this.pause = false
        this.currentTime = new Date().getTime() - this.down
        this.nextTime = new Date().getTime() - this.up
      } else {
        leftText = '计次'
        rightText = '停止'
        this.currentTime = new Date().getTime()
        this.nextTime = new Date().getTime()
        this.timer = setInterval(() => {
          let {
            upMinutes, upMiles, downMinutes, downMiles,
          } = this.state
          if (!this.pause) {
            this.up = new Date().getTime() - this.nextTime
            const a = parseInt((this.up / 10) % 100) // 10毫秒数 10毫秒为1
            const b = parseInt((this.up / 1000) % 60) // 秒数
            upMiles = `${b < 10 ? `0${b}` : b}.${a < 10 ? `0${a}` : a}`
            const minutes = parseInt(this.up / 1000 / 60)
            upMinutes = minutes < 10 ? `0${minutes}` : minutes

            this.down = new Date().getTime() - this.currentTime
            const c = parseInt((this.down / 10) % 100)
            const d = parseInt((this.down / 1000) % 60)
            downMiles = `${d < 10 ? `0${d}` : d}.${c < 10 ? `0${c}` : c}`
            const downMinute = parseInt(this.down / 1000 / 60)
            downMinutes = downMinute < 10 ? `0${downMinute}` : downMinute

            this.setState({
              upMinutes, upMiles, downMinutes, downMiles, leftText, rightText,
            })
          }
        }, 10)
      }
    } else {
      this.pause = true
      this.setState({ rightText: '启动', leftText: '复位' })
    }
  }
}