/*
ln -s ~/Projects/slate-config/slate.js ~/.slate.js
chokidar slate.js -c 'killall Slate || true && open /Applications/Slate.app'
*/

log('==== loaded ==========================================================')

var SMALLSCREEN = { width: 1680, height: 1050 }
var BIGSCREEN = { width: 2560, height: 1440 }
var SCREENS = [SMALLSCREEN, BIGSCREEN]

slate.eachScreen(screen => {
  var rect = screen.rect()
  SCREENS.forEach(S => {
    if (rect.width === S.width && rect.height === S.height) {
      S.id = screen.id()
    }
  })
})
log(SCREENS)

var relaunch = slate.operation('relaunch')
slate.bind('pad0:ctrl,alt,shift', relaunch)
slate.bind('0:ctrl,alt,shift', relaunch)

var xPercent30 = 'screenSizeX*3/10'
var xPercent40 = 'screenSizeX*4/10'
var xPercent50 = 'screenSizeX*5/10'
var xPercent60 = 'screenSizeX*6/10'
var xPercent70 = 'screenSizeX*7/10'
var xPercent80 = 'screenSizeX*8/10'
var xPercent90 = 'screenSizeX*9/10'
var xPercent100 = 'screenSizeX'

var yPercent30 = 'screenSizeY*3/10'
var yPercent40 = 'screenSizeY*4/10'
var yPercent50 = 'screenSizeY*5/10'
var yPercent60 = 'screenSizeY*6/10'
var yPercent70 = 'screenSizeY*7/10'
var yPercent80 = 'screenSizeY*8/10'
var yPercent90 = 'screenSizeY*9/10'
var yPercent100 = 'screenSizeY'

// width varants
var leftWidth = slate.operation('move', {
  x: 'screenOriginX',
  y: 'windowTopLeftY',
  width: 100,
  height: 'windowSizeY',
})
var rightWidth = slate.operation('move', {
  x: 'screenOriginX+screenSizeX-100',
  y: 'windowTopLeftY',
  width: 100,
  height: 'windowSizeY',
})

var leftWidth30 = leftWidth.dup({ width: xPercent30 })
var leftWidth40 = leftWidth.dup({ width: xPercent40 })
var leftWidth50 = leftWidth.dup({ width: xPercent50 })
var leftWidth60 = leftWidth.dup({ width: xPercent60 })
var leftWidth70 = leftWidth.dup({ width: xPercent70 })
var leftWidth80 = leftWidth.dup({ width: xPercent80 })
// eslint-disable-next-line no-unused-vars
var leftWidth90 = leftWidth.dup({ width: xPercent90 })
var leftWidth100 = leftWidth.dup({ width: xPercent100 })

var rightWidth30 = rightWidth.dup({
  width: xPercent30,
  x: 'screenOriginX+screenSizeX-' + xPercent30,
})
var rightWidth40 = rightWidth.dup({
  width: xPercent40,
  x: 'screenOriginX+screenSizeX-' + xPercent40,
})
var rightWidth50 = rightWidth.dup({
  width: xPercent50,
  x: 'screenOriginX+screenSizeX-' + xPercent50,
})
var rightWidth60 = rightWidth.dup({
  width: xPercent60,
  x: 'screenOriginX+screenSizeX-' + xPercent60,
})
var rightWidth70 = rightWidth.dup({
  width: xPercent70,
  x: 'screenOriginX+screenSizeX-' + xPercent70,
})
var rightWidth80 = rightWidth.dup({
  width: xPercent80,
  x: 'screenOriginX+screenSizeX-' + xPercent80,
})
// eslint-disable-next-line no-unused-vars
var rightWidth90 = rightWidth.dup({
  width: xPercent90,
  x: 'screenOriginX+screenSizeX-' + xPercent90,
})
var rightWidth100 = rightWidth.dup({
  width: xPercent100,
  x: 'screenOriginX+screenSizeX-' + xPercent100,
})

var sizeLeft = slate.operation('chain', {
  operations: [
    leftWidth30,
    leftWidth40,
    leftWidth50,
    leftWidth60,
    leftWidth70,
    leftWidth80,
    leftWidth100,
  ],
})
var sizeRight = slate.operation('chain', {
  operations: [
    rightWidth30,
    rightWidth40,
    rightWidth50,
    rightWidth60,
    rightWidth70,
    rightWidth80,
    rightWidth100,
  ],
})

slate.bind('1:ctrl', sizeLeft)
slate.bind('2:ctrl', sizeRight)
slate.bind('pad1:ctrl', sizeLeft)
slate.bind('pad2:ctrl', sizeRight)

var topHeight = slate.operation('move', {
  x: 'windowTopLeftX',
  y: 'screenOriginY',
  width: 'windowSizeX',
  height: 100,
})
var bottomHeight = slate.operation('move', {
  x: 'windowTopLeftX',
  y: 'screenOriginY+screenSizeY-100',
  width: 'windowSizeX',
  height: 100,
})

var topHeight30 = topHeight.dup({ height: yPercent30 })
var topHeight40 = topHeight.dup({ height: yPercent40 })
var topHeight50 = topHeight.dup({ height: yPercent50 })
var topHeight60 = topHeight.dup({ height: yPercent60 })
var topHeight70 = topHeight.dup({ height: yPercent70 })
var topHeight80 = topHeight.dup({ height: yPercent80 })
var topHeight90 = topHeight.dup({ height: yPercent90 })
var topHeight100 = topHeight.dup({ height: yPercent100 })

var bottomHeight30 = bottomHeight.dup({
  height: yPercent30,
  y: 'screenOriginY+screenSizeY-' + yPercent30,
})
var bottomHeight40 = bottomHeight.dup({
  height: yPercent40,
  y: 'screenOriginY+screenSizeY-' + yPercent40,
})
var bottomHeight50 = bottomHeight.dup({
  height: yPercent50,
  y: 'screenOriginY+screenSizeY-' + yPercent50,
})
var bottomHeight60 = bottomHeight.dup({
  height: yPercent60,
  y: 'screenOriginY+screenSizeY-' + yPercent60,
})
var bottomHeight70 = bottomHeight.dup({
  height: yPercent70,
  y: 'screenOriginY+screenSizeY-' + yPercent70,
})
var bottomHeight80 = bottomHeight.dup({
  height: yPercent80,
  y: 'screenOriginY+screenSizeY-' + yPercent80,
})
var bottomHeight90 = bottomHeight.dup({
  height: yPercent90,
  y: 'screenOriginY+screenSizeY-' + yPercent90,
})
var bottomHeight100 = bottomHeight.dup({
  height: yPercent100,
  y: 'screenOriginY+screenSizeY-' + yPercent100,
})

var sizeTop = slate.operation('chain', {
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
var sizeBottom = slate.operation('chain', {
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

var onethird = function(win) {
  if (!win) return
  var w = win.rect()
  var screen = slate.screen()
  var s = screen.rect()
  var targetwidth = (s.width * 4) / 10
  if (w.x === s.x && Math.abs(w.width - targetwidth) < 10) {
    win.doOperation(rightWidth40)
  } else if (w.x + w.width === s.width && Math.abs(w.width - targetwidth) > 10) {
    win.doOperation(rightWidth40)
  } else {
    win.doOperation(leftWidth40)
  }
}
slate.bind('pad1:cmd', onethird)

var half = function(win) {
  if (!win) return
  var w = win.rect()
  var screen = slate.screen()
  var s = screen.rect()
  var targetwidth = (s.width * 5) / 10
  if (w.x === s.x && Math.abs(w.width - targetwidth) < 10) {
    win.doOperation(rightWidth50)
  } else if (w.x + w.width === s.width && Math.abs(w.width - targetwidth) > 10) {
    win.doOperation(rightWidth50)
  } else {
    win.doOperation(leftWidth50)
  }
}
slate.bind('pad2:cmd', half)

var twothirds = function(win) {
  if (!win) return
  var w = win.rect()
  var screen = slate.screen()
  var s = screen.rect()
  var targetwidth = (s.width * 6) / 10
  if (w.x === s.x && Math.abs(w.width - targetwidth) < 10) {
    win.doOperation(rightWidth60)
  } else if (w.x + w.width === s.width && Math.abs(w.width - targetwidth) > 10) {
    win.doOperation(rightWidth60)
  } else {
    win.doOperation(leftWidth60)
  }
}
slate.bind('pad3:cmd', twothirds)

function getNextScreen(screen) {
  // let id = screen.id() + 1
  // if (id >= slate.screenCount()) id = 0
  let id = 1 - screen.id()
  return slate.screenForRef(id)
}

function defaultWindowSize(win, screen) {
  screen = screen || win.screen()
  var rect = screen.rect()
  let move = slate.operation('move', rect, screen)
  if (isBigScreen(screen)) {
    move = defaultWindowSizeForBigScreen(move, win.app().name(), screen)
  }
  win.doOperation(move)
}
slate.bind('w:ctrl', defaultWindowSize)

function moveToOtherScreen(win) {
  var screen = getNextScreen(win.screen())
  defaultWindowSize(win, screen)
}
slate.bind('pad2:ctrl,alt', moveToOtherScreen)

function defaultWindowSizeForBigScreen(move, name, screen) {
  switch (name) {
    case 'Code':
      move = move.dup({
        width: 'screenSizeX*7/10',
        x: 'screenOriginX+screenSizeX-screenSizeX*7/10',
        screen,
      })
      break
    default:
      move = move.dup({
        width: 'screenSizeX*5/10',
        height: 'screenSizeY*8/10',
        screen,
      })
      break
  }
  return move
}

function isBigScreen(screen) {
  return screen.id() === BIGSCREEN.id
}

function log(...args) {
  var msg = args.map(formatArg)
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
