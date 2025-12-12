import { Swiper } from 'swiper' 
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function useCarousel(
	selector = '#titanCarousel',
	options = {}
) {
    const swiper = ref(null)
	onMounted(() => {
		nextTick(() => {
			swiper.value = new Swiper(selector, {
				modules: [Navigation, Pagination, Autoplay],
				slidesPerView: 1,
				spaceBetween: 10,
				loop: false,
				autoplay: false
			})
		})
	})
    return { swiper }
}
