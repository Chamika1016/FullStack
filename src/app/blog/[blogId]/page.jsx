import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            quaerat veniam ab aspernatur earum laborum, molestias sunt corporis
            nostrum dolorem nesciunt consequuntur vitae sequi, error obcaecati
            corrupti? Accusantium, rerum officiis.
          </p>
          <div className={styles.author}>
            <Image
              src="/image2.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Chamika Lakshitha</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/image4.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis
          quia porro soluta explicabo reiciendis minus nulla, ullam harum esse
          at reprehenderit doloremque molestiae adipisci sequi inventore
          voluptatem ex est!
        </p>
      </div>
    </div>
  );
};

export default page;
