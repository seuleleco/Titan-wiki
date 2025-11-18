import { Swiper } from 'swiper' 
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function useCarousel(
	selector = '#titanCarousel',
	options = {}
) {
	onMounted(() => {
		nextTick(() => {
			new Swiper(selector, {
				modules: [Navigation, Pagination, Autoplay],
				slidesPerView: 1,
				spaceBetween: 10,
				loop: true,
				autoplay: {
					delay: 1000,
					pauseOnMouseEnter: true
				}
			})
		})
	})
}
