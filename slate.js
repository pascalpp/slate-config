/*
yarn link
yarn dev
*/

// keystrokes https://github.com/jigish/slate/wiki/Keystrokes#allowed-keys

// Mac sluggish window resizing
// https://github.com/microsoft/vscode/issues/169123
// resolved by installing Insiders build https://code.visualstudio.com/insiders/
// install code-insiders CLI
// mv /usr/local/bin/code-insiders /usr/local/bin/code

log('==== loaded ==========================================================')

// to view logs:
// Open Console.app
// Start log streaming
// filter for message: slatelog

var sizes = []

slate.eachScreen(screen => {
  const rect = screen.rect()
  sizes.push(rect.width)
  sizes.sort((a, b) => b - a)
})

// const relaunch = slate.operation('relaunch')
// slate.bind('pad0:ctrl,alt,shift', relaunch)
// slate.bind('0:ctrl,alt,shift', relaunch)

const xPercent30 = 'screenSizeX*3/10'
const xPercent40 = 'screenSizeX*4/10'
const xPercent50 = 'screenSizeX*5/10'
const xPercent60 = 'screenSizeX*6/10'
const xPercent70 = 'screenSizeX*7/10'
const xPercent75 = 'screenSizeX*7.5/10'
const xPercent80 = 'screenSizeX*8/10'
const xPercent90 = 'screenSizeX*9/10'
const xPercent95 = 'screenSizeX*95/100'
const xPercent100 = 'screenSizeX'

const yPercent30 = 'screenSizeY*3/10'
const yPercent40 = 'screenSizeY*4/10'
const yPercent50 = 'screenSizeY*5/10'
const yPercent60 = 'screenSizeY*6/10'
const yPercent70 = 'screenSizeY*7/10'
const yPercent80 = 'screenSizeY*8/10'
const yPercent90 = 'screenSizeY*9/10'
const yPercent100 = 'screenSizeY'

// width varants
const leftWidth = slate.operation('move', {
  x: 'screenOriginX',
  y: 'windowTopLeftY',
  width: 100,
  height: 'windowSizeY',
})
const rightWidth = slate.operation('move', {
  x: 'screenOriginX+screenSizeX-100',
  y: 'windowTopLeftY',
  width: 100,
  height: 'windowSizeY',
})

const leftWidth30 = leftWidth.dup({ width: xPercent30 })
const leftWidth40 = leftWidth.dup({ width: xPercent40 })
const leftWidth50 = leftWidth.dup({ width: xPercent50 })
const leftWidth60 = leftWidth.dup({ width: xPercent60 })
const leftWidth70 = leftWidth.dup({ width: xPercent70 })
const leftWidth75 = leftWidth.dup({ width: xPercent75 })
const leftWidth80 = leftWidth.dup({ width: xPercent80 })
const leftWidth90 = leftWidth.dup({ width: xPercent90 })
const leftWidth95 = leftWidth.dup({ width: xPercent95 })
const leftWidth100 = leftWidth.dup({ width: xPercent100 })

const rightWidth30 = rightWidth.dup({
  width: xPercent30,
  x: 'screenOriginX+screenSizeX-' + xPercent30,
})
const rightWidth40 = rightWidth.dup({
  width: xPercent40,
  x: 'screenOriginX+screenSizeX-' + xPercent40,
})
const rightWidth50 = rightWidth.dup({
  width: xPercent50,
  x: 'screenOriginX+screenSizeX-' + xPercent50,
})
const rightWidth60 = rightWidth.dup({
  width: xPercent60,
  x: 'screenOriginX+screenSizeX-' + xPercent60,
})
const rightWidth70 = rightWidth.dup({
  width: xPercent70,
  x: 'screenOriginX+screenSizeX-' + xPercent70,
})
const rightWidth75 = rightWidth.dup({
  width: xPercent75,
  x: 'screenOriginX+screenSizeX-' + xPercent75,
})
const rightWidth80 = rightWidth.dup({
  width: xPercent80,
  x: 'screenOriginX+screenSizeX-' + xPercent80,
})
const rightWidth90 = rightWidth.dup({
  width: xPercent90,
  x: 'screenOriginX+screenSizeX-' + xPercent90,
})
const rightWidth95 = rightWidth.dup({
  width: xPercent95,
  x: 'screenOriginX+screenSizeX-' + xPercent95,
})
const rightWidth100 = rightWidth.dup({
  width: xPercent100,
  x: 'screenOriginX+screenSizeX-' + xPercent100,
})

const sizeLeft = slate.operation('chain', {
  operations: [
    leftWidth30,
    leftWidth40,
    leftWidth50,
    leftWidth60,
    leftWidth70,
    leftWidth80,
    leftWidth90,
    leftWidth95,
    leftWidth100,
  ],
})
const sizeRight = slate.operation('chain', {
  operations: [
    rightWidth30,
    rightWidth40,
    rightWidth50,
    rightWidth60,
    rightWidth70,
    rightWidth80,
    rightWidth90,
    rightWidth95,
    rightWidth100,
  ],
})

slate.bind('1:ctrl', sizeLeft)
slate.bind('2:ctrl', sizeRight)
slate.bind('pad1:ctrl', sizeLeft)
slate.bind('pad2:ctrl', sizeRight)

const topHeight = slate.operation('move', {
  x: 'windowTopLeftX',
  y: 'screenOriginY',
  width: 'windowSizeX',
  height: 100,
})
const bottomHeight = slate.operation('move', {
  x: 'windowTopLeftX',
  y: 'screenOriginY+screenSizeY-100',
  width: 'windowSizeX',
  height: 100,
})

const topHeight30 = topHeight.dup({ height: yPercent30 })
const topHeight40 = topHeight.dup({ height: yPercent40 })
const topHeight50 = topHeight.dup({ height: yPercent50 })
const topHeight60 = topHeight.dup({ height: yPercent60 })
const topHeight70 = topHeight.dup({ height: yPercent70 })
const topHeight80 = topHeight.dup({ height: yPercent80 })
const topHeight90 = topHeight.dup({ height: yPercent90 })
const topHeight100 = topHeight.dup({ height: yPercent100 })

const bottomHeight30 = bottomHeight.dup({
  height: yPercent30,
  y: 'screenOriginY+screenSizeY-' + yPercent30,
})
const bottomHeight40 = bottomHeight.dup({
  height: yPercent40,
  y: 'screenOriginY+screenSizeY-' + yPercent40,
})
const bottomHeight50 = bottomHeight.dup({
  height: yPercent50,
  y: 'screenOriginY+screenSizeY-' + yPercent50,
})
const bottomHeight60 = bottomHeight.dup({
  height: yPercent60,
  y: 'screenOriginY+screenSizeY-' + yPercent60,
})
const bottomHeight70 = bottomHeight.dup({
  height: yPercent70,
  y: 'screenOriginY+screenSizeY-' + yPercent70,
})
const bottomHeight80 = bottomHeight.dup({
  height: yPercent80,
  y: 'screenOriginY+screenSizeY-' + yPercent80,
})
const bottomHeight90 = bottomHeight.dup({
  height: yPercent90,
  y: 'screenOriginY+screenSizeY-' + yPercent90,
})
const bottomHeight100 = bottomHeight.dup({
  height: yPercent100,
  y: 'screenOriginY+screenSizeY-' + yPercent100,
})

const sizeTop = slate.operation('chain', {
  operations: [
    topHeight30,
    topHeight40,
    topHeight50,
    topHeight60,
    topHeight70,
    topHeight80,
    topHeight90,
    topHeight100,
  ],
})
const sizeBottom = slate.operation('chain', {
  operations: [
    bottomHeight30,
    bottomHeight40,
    bottomHeight50,
    bottomHeight60,
    bottomHeight70,
    bottomHeight80,
    bottomHeight90,
    bottomHeight100,
  ],
})

slate.bind('pad7:ctrl', sizeTop)
slate.bind('pad4:ctrl', sizeBottom)
slate.bind('7:ctrl', sizeTop)
slate.bind('4:ctrl', sizeBottom)

const taller = slate.operation('move', {
  x: 'windowTopLeftX',
  y: 'windowTopLeftY',
  width: 'windowSizeX',
  height: 'windowSizeY+20',
})
slate.bind('down:ctrl,alt', taller)

const shorter = slate.operation('move', {
  x: 'windowTopLeftX',
  y: 'windowTopLeftY',
  width: 'windowSizeX',
  height: 'windowSizeY-20',
})
slate.bind('up:ctrl,alt', shorter)

const wider = slate.operation('move', {
  x: 'windowTopLeftX',
  y: 'windowTopLeftY',
  width: 'windowSizeX+20',
  height: 'windowSizeY',
})
slate.bind('right:ctrl,alt', wider)

const narrower = slate.operation('move', {
  x: 'windowTopLeftX',
  y: 'windowTopLeftY',
  width: 'windowSizeX-20',
  height: 'windowSizeY',
})
slate.bind('left:ctrl,alt', narrower)

const onethird = function(win) {
  if (!win) return
  const w = win.rect()
  const screen = slate.screen()
  const s = screen.rect()
  const targetwidth = (s.width * 4) / 10
  if (w.x === s.x && Math.abs(w.width - targetwidth) < 10) {
    win.doOperation(rightWidth40)
  } else if (w.x + w.width === s.width && Math.abs(w.width - targetwidth) > 10) {
    win.doOperation(rightWidth40)
  } else {
    win.doOperation(leftWidth40)
  }
}
slate.bind('pad1:cmd', onethird)

const half = function(win) {
  if (!win) return
  const w = win.rect()
  const screen = slate.screen()
  const s = screen.rect()
  const targetwidth = (s.width * 5) / 10
  if (w.x === s.x && Math.abs(w.width - targetwidth) < 10) {
    win.doOperation(rightWidth50)
  } else if (w.x + w.width === s.width && Math.abs(w.width - targetwidth) > 10) {
    win.doOperation(rightWidth50)
  } else {
    win.doOperation(leftWidth50)
  }
}
slate.bind('pad2:cmd', half)

const twothirds = function(win) {
  if (!win) return
  const w = win.rect()
  const screen = slate.screen()
  const s = screen.rect()
  const targetwidth = (s.width * 6) / 10
  if (w.x === s.x && Math.abs(w.width - targetwidth) < 10) {
    win.doOperation(rightWidth60)
  } else if (w.x + w.width === s.width && Math.abs(w.width - targetwidth) > 10) {
    win.doOperation(rightWidth60)
  } else {
    win.doOperation(leftWidth60)
  }
}
slate.bind('pad3:cmd', twothirds)

const threefourths = function(win) {
  if (!win) return
  const w = win.rect()
  const screen = slate.screen()
  const s = screen.rect()
  const targetwidth = (s.width * 7.5) / 10
  if (w.x === s.x && Math.abs(w.width - targetwidth) < 10) {
    win.doOperation(rightWidth75)
  } else if (w.x + w.width === s.width && Math.abs(w.width - targetwidth) > 10) {
    win.doOperation(rightWidth75)
  } else {
    win.doOperation(leftWidth75)
  }
}
slate.bind('pad4:cmd', threefourths)

function getNextScreen(screen) {
  let id = screen.id() + 1
  if (id >= slate.screenCount()) id = 0
  return slate.screenForRef(id)
}

function defaultWindowSize(win, screen) {
  screen = screen || (win && win.screen())
  if (!screen) return
  const rect = screen.rect()
  let move = slate.operation('move', rect, screen)
  if (isBigScreen(screen)) {
    move = defaultWindowSizeForBigScreen({ move, win, screen })
  } else {
    move = defaultWindowSizeForSmallScreen({ move, win, screen })
  }
  win.doOperation(move)
}
slate.bind('w:ctrl', defaultWindowSize)

function fillScreen(win, screen) {
  screen = screen || (win && win.screen())
  if (!screen) return
  const rect = screen.rect()
  const move = slate.operation('move', rect, screen)
  win.doOperation(move)
}
slate.bind('w:ctrl,shift', fillScreen)

function moveToOtherScreen(win) {
  const screen = getNextScreen(win.screen())
  defaultWindowSize(win, screen)
}
slate.bind('2:ctrl,alt', moveToOtherScreen)
slate.bind('pad2:ctrl,alt', moveToOtherScreen)

function defaultWindowSizeForBigScreen({ move, win, screen }) {
  if (!win) return
  const appName = win.app().name()
  const title = win.title()
  switch (appName) {
    case 'Code':
    case 'Code - Insiders':
    case 'Zed':
      move = move.dup({
        width: 'screenSizeX*7.5/10-100',
        x: 'screenOriginX+screenSizeX-screenSizeX*7.5/10',
        screen,
      })
      break
    case 'GitHub Desktop':
      move = move.dup({
        width: 'screenSizeX*5/10-100',
        height: 'screenSizeY*7/10',
        x: 'screenOriginX+screenSizeX-screenSizeX*5/10',
        y: '80',
        screen,
      })
      break
    case 'Google Chrome':
      if (title.includes('DevTools')) {
        move = move.dup({
          width: 'screenSizeX*5/10',
          height: 'screenSizeY*7/10',
          y: 'screenOriginY+screenSizeY-screenSizeY*7/10',
          screen,
        })
      } else {
        move = move.dup({
          width: 'screenSizeX*5/10',
          height: 'screenSizeY*8/10',
          screen,
        })
      }
      break
    case 'Mail':
    case 'Google Calendar':
    case 'NetNewsWire':
      move = move.dup({
        width: 'screenSizeX*8/10-100',
        height: 'screenSizeY*9/10',
        x: 'screenOriginX+screenSizeX-screenSizeX*8/10',
        screen,
      })
      break
    case 'Messages':
      move = move.dup({
        width: 'screenSizeX*4/10-100',
        height: 'screenSizeY*6/10',
        x: 'screenOriginX+screenSizeX-screenSizeX*4/10',
        screen,
      })
      break
    case 'Music': {
      const width = title === 'MiniPlayer' ? '500' : 'screenSizeX*7/10'
      move = move.dup({
        width,
        screen,
      })
      break
    }
    case 'Safari':
      if (title.includes('Web Inspector')) {
        move = move.dup({
          width: 'screenSizeX*5/10',
          height: 'screenSizeY*7/10',
          y: 'screenOriginY+screenSizeY-screenSizeY*7/10',
          screen,
        })
      } else if (title.includes('Product Board')) {
        const windowObject = slate.window()
        log(Object.keys(windowObject))
        log(Object.keys(win))

        move = move.dup({
          width: '1440',
          height: 'screenSizeY*9/10',
          screen,
        })
      } else {
        move = move.dup({
          width: 'screenSizeX*5/10',
          height: 'screenSizeY*8/10',
          screen,
        })
      }
      break
    case 'Gmail':
    case 'Google Chat':
    case 'Slack':
    case 'Discord':
      move = move.dup({
        width: 'screenSizeX*6/10-100',
        height: 'screenSizeY*9/10',
        x: 'screenOriginX+screenSizeX-screenSizeX*6/10',
        screen,
      })
      break
    case 'Slither':
      move = move.dup({
        width: 'screenSizeY+100',
        height: 'screenSizeY',
        x: 'screenOriginX+screenSizeX/2-screenSizeY/2-50',
        screen,
      })
      break
    case 'Terminal':
      move = move.dup({
        width: 'screenSizeX*5/10',
        height: 'screenSizeY*5/10',
        y: 'screenOriginY+screenSizeY*5/10',
        screen,
      })
      break
    case 'Tweetbot':
      move = move.dup({
        width: '500',
        height: 'screenSizeY',
        x: 'screenOriginX+screenSizeX-500',
        screen,
      })
      break
    default:
      log('No default size for', name)
      move = move.dup({
        width: 'screenSizeX*5/10',
        height: 'screenSizeY*8/10',
        screen,
      })
      break
  }
  return move
}

function defaultWindowSizeForSmallScreen({ move, win, screen }) {
  const appName = win.app().name()
  switch (appName) {
    case 'Messages':
      move = move.dup({
        width: 'screenSizeX*5/10',
        height: 'screenSizeY*8/10',
        x: 'screenOriginX+screenSizeX-screenSizeX*5/10',
        screen,
      })
      break
    case 'Music':
      move = move.dup({
        width: '400',
        screen,
      })
      break
    case 'Slither':
      move = move.dup({
        width: 'screenSizeY+100',
        height: 'screenSizeY',
        x: 'screenOriginX+screenSizeX/2-screenSizeY/2-50',
        screen,
      })
      break
    case 'Tweetbot':
      move = move.dup({
        width: '500',
        height: 'screenSizeY',
        x: 'screenOriginX+screenSizeX-500',
        screen,
      })
      break
  }
  return move
}

function isBigScreen(screen) {
  return sizes.length > 1 && screen.rect().width === sizes[0]
}

function log(...args) {
  const msg = args.map(formatArg).join(' ')
  slate.log('slatelog', msg)
}

function formatArg(arg) {
  switch (typeof arg) {
    case 'number':
    case 'string':
    case 'boolean':
      return arg

    default:
      return JSON.stringify(arg)
  }
}
