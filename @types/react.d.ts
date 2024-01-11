import 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    /**
     * Data AOS animation
     */
    'data-aos'?:
      | 'fade'
      | 'fade-up'
      | 'fade-down'
      | 'fade-left'
      | 'fade-right'
      | 'fade-up-right'
      | 'fade-up-left'
      | 'fade-down-right'
      | 'fade-down-left'
      | 'flip-up'
      | 'flip-down'
      | 'flip-left'
      | 'flip-right'
      | 'slide-up'
      | 'slide-down'
      | 'slide-left'
      | 'slide-right'
      | 'zoom-in'
      | 'zoom-in-up'
      | 'zoom-in-down'
      | 'zoom-in-left'
      | 'zoom-in-right'
      | 'zoom-out'
      | 'zoom-out-up'
      | 'zoom-out-down'
      | 'zoom-out-left'
      | 'zoom-out-right'
    /**
     * offset (in px) from the original trigger point
     */
    'data-aos-offset'?: number
    /**
     * values from 0 to 3000, with step 50ms
     */
    'data-aos-delay'?: number
    /**
     * values from 0 to 3000, with step 50ms
     */
    'data-aos-duration'?: number
    /**
     * default easing for AOS animations
     */
    'data-aos-easing'?:
      | 'linear'
      | 'ease'
      | 'ease-in'
      | 'ease-out'
      | 'ease-in-out'
      | 'ease-in-back'
      | 'ease-out-back'
      | 'ease-in-out-back'
      | 'ease-in-sine'
      | 'ease-out-sine'
      | 'ease-in-out-sine'
      | 'ease-in-quad'
      | 'ease-out-quad'
      | 'ease-in-out-quad'
      | 'ease-in-cubic'
      | 'ease-out-cubic'
      | 'ease-in-out-cubic'
      | 'ease-in-quart'
      | 'ease-out-quart'
      | 'ease-in-out-quart'
    /**
     * whether elements should animate out while scrolling past them
     */
    'data-aos-mirror'?: boolean
    /**
     * whether animation should happen only once - while scrolling down
     */
    'data-aos-once'?: boolean
    /**
     * defines which position of the element regarding to window should trigger the animation
     */
    'data-aos-anchor-placement'?:
      | 'top-bottom'
      | 'top-center'
      | 'top-top'
      | 'center-bottom'
      | 'center-center'
      | 'center-top'
      | 'bottom-bottom'
      | 'bottom-center'
      | 'bottom-top'
  }
}
