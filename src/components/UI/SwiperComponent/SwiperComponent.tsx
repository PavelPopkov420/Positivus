import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./SwiperComponent.module.scss";
import { SwiperItem } from "../SwiperItem/SwiperItem";

export default function SwiperComponent() {
  const comments = [
    {
      id: 1,
      name: "John Smith",
      jobTitle: "Marketing Director at XYZ Corp",
      quote: "We have been working with Positivus for the past year...",
    },
    {
      id: 2,
      name: "Jane Doe",
      jobTitle: "Product Manager at ABC Inc",
      quote: "The collaboration with Positivus has been...",
    },
    {
      id: 3,
      name: "Alice Johnson",
      jobTitle: "CEO at Tech Solutions",
      quote: "Positivus has transformed our online presence...",
    },
  ]

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        pagination={{
          el: `.${styles.swiperPagination}`,
          clickable: true,
        }}
        slidesPerView={1.9}
      >
        {comments.map((item) => (
          <SwiperSlide key={item.id} className={styles.swiperSlide}>
            <SwiperItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles.swiperButtonPrev} ${styles.navButton}`}></div>
      <div className={`${styles.swiperButtonNext} ${styles.navButton}`}></div>
      <div className={styles.swiperPagination}></div>
    </div>
  );
}