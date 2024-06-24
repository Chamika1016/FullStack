import React from "react";
import styles from "./Page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/image.jpg" alt="" fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Tellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            voluptatibus? Aut ab laudantium, perferendis illo laboriosam
            <br />
            distinctio ex fugiat hic beatae magnam explicabo quasi nihil facere
            non sit eligendi consequuntur!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            adipisci, voluptate molestiae cum sint quidem nostrum nesciunt,
            <br />
            sit quaerat voluptatem corporis at aliquid? Modi vel magnam nisi
            ipsa rerum! Perspiciatis.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default page;
