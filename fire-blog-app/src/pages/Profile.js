import React from 'react'
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div style={{display:'flex', margin:'20px'}}>
    <div className={styles.main}>
      <img style={{width:'20rem'}} src={'https://miro.medium.com/max/1400/1*JyYin7G7aGwgD9zpYBZ12Q.png'} alt="codingSvg" className={styles.image} />
      <h1 style={{marginTop: '2rem', marginBottom:'2rem'}}> Hi, &#128075; I'm Ersen</h1>
      <h4>I’m currently learning Full-Stack Development Languages.</h4>
      <h4>
        I've already known HTML, Css, JavaScript, ReactJS, SQL, Linux,
        Python.
      </h4>
      <h4>
        <a href="70ozturkersen@gmail.com" className={styles.anchor}>Send email</a> :
        70ozturkersen@gmail.com
      </h4>
    </div>

    <div className={styles.main}>
      <img style={{width:'17.5rem'}} src={'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'} alt="codingSvg" className={styles.image} />
      <h1 style={{marginTop: '2rem',color:'#55D8C1', marginBottom:'2rem'}}> Hi, &#128075; I'm Mikail</h1>
      <h4 style={{color:'#55D8C1'}} >I’m currently learning Full-Stack Development Languages.</h4>
      <h4 style={{color:'#55D8C1'}}>
        I've already known HTML, Css, JavaScript, ReactJS, SQL, Linux,
        Python.
      </h4>
      <h4 style={{color:'#55D8C1'}}>
        <a href="mikaildokgoz@gmail.com" className={styles.anchor2}>Send email</a> :
        mikaildokgoz@gmail.com
      </h4>
    </div>
    </div>
  );
}

export default Profile