const superbowlWin = objectArray => {
    const theWin = objectArray.find(object => object.result === "W")
    if (theWin) return theWin.year
    return theWin
}
