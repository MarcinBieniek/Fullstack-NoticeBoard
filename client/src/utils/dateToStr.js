export const dateToStr = date => {
    return ( 
      [
      date.getMonth() + 1,
      date.getDate(),
      date.getFullYear()
    ].join('/')
    )
  }