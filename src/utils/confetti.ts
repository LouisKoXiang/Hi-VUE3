import { onMounted } from 'vue'
import confetti from 'canvas-confetti'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function confetiNow () {
  function randomInRange (min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  onMounted(() => {
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: {
        y: 0.6
      }
    })
  })
  return {
    randomInRange
  }
}
