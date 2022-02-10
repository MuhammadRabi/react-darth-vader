import React from "react";
import styles from "./pricing.module.scss";

const PricingCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.price}>
        <h3 className={styles.title}>{props.title}</h3>
        <i className="fas fa-server"></i>
        <span>{props.price}</span>
        <h4 className={styles.subtitle}>per month</h4>
      </div>
      <ul className={styles["plan-details"]}>
        <li>{props.space}GB HDD Space</li>
        <li>{props.email} Email Addresses</li>
        <li>{props.subdomain} Subdomains</li>
        <li>{props.database} databases</li>
        <li>{props.support} support</li>
      </ul>
      <button>choose plan</button>
    </div>
  );
};

export default PricingCard;
