export interface flyableInterface {
  perform()
}

export const normalFlight: flyableInterface = {
  perform: () => {
    return 'performing normal flight'
  }
}

export const noFlight: flyableInterface = {
  perform: () => {
    return 'can not fly'
  }
}

export const rocketFlight: flyableInterface = {
  perform: () => {
    return 'flying with an Epstein engine'
  }
}
