export interface quackableInterface {
  perform()
}

export const normalQuack: quackableInterface = {
  perform: () => {
    return 'performing normal quack'
  }
}

export const squeekyQuack: quackableInterface = {
  perform: () => {
    return 'performing a squeek'
  }
}

export const muteQuack: quackableInterface = {
  perform: () => {
    return '<silence>'
  }
}
