import * as React from 'react'


interface propsInterface {
  disable: boolean;
  date: string;
  selectedDate: string;
  selectedDate2: string;
  hoveredDate: string;
  min: string;
  max: string;
  setHoverDate(date: string): void;
  setSelectedDate(date: string): void;
  setSelectedDate2(date: string): void;
  activeInput: number;
}

interface statesInterface {
  isHover: boolean;
}

class Day extends React.Component<propsInterface, statesInterface> {
  state = {
    isHover: false,
  }

  render() {
    if (this.props.disable) {
      return <div className='notInMonth' style={{ cursor: 'not-allowed' }}>X</div>
    } else {
      if (this.props.activeInput === 1) {
        if (this.props.min !== '' && this.props.date < this.props.min) {
          return (
            <div className='dayInThisMonth'
              style={{ backgroundColor: 'grey', cursor: 'not-allowed' }}>
              {this.props.date[8] === '0' ? this.props.date.slice(9, 10) : this.props.date.slice(8, 10)}
            </div>
          )
        }

        if (this.props.max !== '' && this.props.date > this.props.max) {
          return (
            <div className='dayInThisMonth'
              style={{ backgroundColor: 'grey', cursor: 'not-allowed' }}>
              {this.props.date[8] === '0' ? this.props.date.slice(9, 10) : this.props.date.slice(8, 10)}
            </div>
          )
        }

        return (
          <div className='dayInThisMonth'
            style={{
              ...(this.props.selectedDate === this.props.date ? { backgroundColor: '#000cff', cursor: 'pointer' } : { cursor: 'pointer' }),
              ...(this.props.selectedDate2 === this.props.date ? { backgroundColor: '#000cff', cursor: 'pointer' } : { cursor: 'pointer' }),
              ...(this.props.date > this.props.selectedDate && this.props.date < this.props.selectedDate2 ? { backgroundColor: '#56a2f6' } : {}),
            }}
            onMouseMove={() => {
              this.setState({ isHover: true })
              this.props.setHoverDate(this.props.date)
            }}
            onMouseLeave={() => {
              this.setState({ isHover: false })
              this.props.setHoverDate('')
            }}
            onClick={() => {
              if (!this.props.selectedDate2) {
                this.props.setSelectedDate(this.props.date)
              } else {
                if (this.props.date < this.props.selectedDate2) {
                  this.props.setSelectedDate(this.props.date)
                } else {
                  this.props.setSelectedDate(this.props.selectedDate2)
                  this.props.setSelectedDate2(this.props.date)
                }
              }
            }}>
            {this.props.date[8] === '0' ? this.props.date.slice(9, 10) : this.props.date.slice(8, 10)}
          </div>
        )
      }

      if (this.props.activeInput === 2 && this.props.selectedDate) {
        if (this.props.min !== '' && this.props.date < this.props.min) {
          return (
            <div className='dayInThisMonth'
              style={{ backgroundColor: 'grey', cursor: 'not-allowed' }}>
              {this.props.date[8] === '0' ? this.props.date.slice(9, 10) : this.props.date.slice(8, 10)}
            </div>
          )
        }

        if (this.props.max !== '' && this.props.date > this.props.max) {
          return (
            <div className='dayInThisMonth'
              style={{ backgroundColor: 'grey', cursor: 'not-allowed' }}>
              {this.props.date[8] === '0' ? this.props.date.slice(9, 10) : this.props.date.slice(8, 10)}
            </div>
          )
        }

        return (
          <div className='dayInThisMonth'
            style={{
              ...(this.props.selectedDate === this.props.date ? { backgroundColor: '#000cff', cursor: 'pointer' } : { cursor: 'pointer' }),
              ...(this.props.selectedDate2 === this.props.date ? { backgroundColor: '#000cff', cursor: 'pointer' } : { cursor: 'pointer' }),
              ...(this.props.date > this.props.selectedDate && this.props.date < this.props.selectedDate2 ? { backgroundColor: '#56a2f6' } : {}),
            }}
            onMouseMove={() => {
              this.setState({ isHover: true })
              this.props.setHoverDate(this.props.date)
            }}
            onMouseLeave={() => {
              this.setState({ isHover: false })
              this.props.setHoverDate('')
            }}
            onClick={() => {
              if (this.props.date > this.props.selectedDate) {
                this.props.setSelectedDate2(this.props.date)
              } else if (this.props.date < this.props.selectedDate) {
                if (this.props.selectedDate && this.props.selectedDate2) {
                  this.props.setSelectedDate(this.props.date)
                } else {
                  this.props.setSelectedDate2(this.props.selectedDate)
                  this.props.setSelectedDate(this.props.date)
                }
              }
            }}>
            {this.props.date[8] === '0' ? this.props.date.slice(9, 10) : this.props.date.slice(8, 10)}
          </div>
        )
      }

      return (
        <div className='dayInThisMonth'
          style={{
            ...(this.props.selectedDate === this.props.date ? { backgroundColor: '#000cff', cursor: 'pointer' } : { cursor: 'pointer' }),
            ...(this.props.selectedDate2 === this.props.date ? { backgroundColor: '#000cff', cursor: 'pointer' } : { cursor: 'pointer' }),
            ...(this.state.isHover ? { backgroundColor: '#56a2f6' } : {}),
          }}
          onMouseMove={() => {
            this.setState({ isHover: true })
          }}
          onMouseLeave={() => {
            this.setState({ isHover: false })
          }}
          onClick={() => {
            this.props.setSelectedDate(this.props.date)
          }}>
          <div>{this.props.date[8] === '0' ? this.props.date.slice(9, 10) : this.props.date.slice(8, 10)}</div>
        </div>
      )
    }
  }
}

export default Day
