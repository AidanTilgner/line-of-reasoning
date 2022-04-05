import styles from "./ProjectPreview.module.scss";
import Image from "next/image";

const ProjectPreview = ({ name, image }) => {
  const src = image;

  return (
    <div className={styles.project_preview}>
      <img src={src} className={styles.project_preview__image} layout="fill" />
      <h2 className={styles.project_preview__name}>{name}</h2>
      {/* <p className={styles.project_preview__description}>{description}</p> */}
    </div>
  );
};

export default ProjectPreview;
