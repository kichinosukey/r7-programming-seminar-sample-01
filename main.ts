let right = 0
let left = 0
basic.forever(function () {
    // 1. まず最初に、左・右のセンサー値をそれぞれ変数に入れる
    left = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    right = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    serial.writeLine("L=" + left + ",R=" + right)
    // 2. ここからは、その「left」と「right」の値だけを使って
    // 4パターンに分かれるように if-else を書く
    // ※0=黒,1=白 の場合の例
    // ★両方黒 (0,0) のとき
    // ★左白(1), 右黒(0) のとき
    // ★左黒(0), 右白(1) のとき
    // ★両方白 (1,1) のとき
    // maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 5)
    // maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 5)
    if (left == 0 && right == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (left == 1 && right == 0) {
        // 左ちょい強め
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        // 右ちょい弱め
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 15)
    } else if (left == 0 && right == 1) {
        // 左ちょい弱め
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 15)
        // 右ちょい強め
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    } else if (left == 1 && right == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
    }
})
