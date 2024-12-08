let light_level = 0
basic.showIcon(IconNames.Heart)
pins.digitalWritePin(DigitalPin.P9, 0)
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.setBrightness(255)
loops.everyInterval(Environment.ReadSoilHumidity(AnalogPin.P2), function () {
    light_level = Environment.ReadLightIntensity(AnalogPin.P3)
})
basic.forever(function () {
    if ((0 as any) < (60 as any)) {
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
    if (light_level < 20) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
